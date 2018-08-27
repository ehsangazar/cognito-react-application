import * as React from "react";
import styled from 'styled-components';
import Link from 'next/link'

// Amplify AWS Congnito
import Amplify, { Auth } from 'aws-amplify';
import CognitoConfig from '../Configs/Cognito.config'
Amplify.configure(CognitoConfig);

const Title = styled.h1`
  color: red;
`;

interface Props {}

interface State {
  user: Object,
}

class Index extends React.Component<Props,State> {
  constructor(props:any) {
    super(props)
    this.state = {
      user: {},
    }
  }
  componentDidMount() {
    // if user is logged in! go to the first page
    Auth.currentAuthenticatedUser()
    .then((response?:any)=>{
      this.setState({
        user: response.attributes
      })
    }).catch(()=>{
      // do nothing
    })
  }

  private _handleLogOut = () => {
    Auth.signOut()
    .then(() => {
      window.location.reload()
    })
    .catch(() => {
      window.location.reload()
    })
  }

  render () {
    const { user = {} } = this.state
    return (
      <div>
        <Title>
          Welcome
        </Title>   

        {user && user.email &&
          <div>
            <h2>
              You are logged in as {user.email}
            </h2>
            <button
              onClick={this._handleLogOut}
            >
              Log out
            </button>
          </div>
        }    

        <br />
        <Link href="/login">
          <a>Login</a>
        </Link>
        <br />
        <Link href="/register">
          <a>register</a>
        </Link>
      </div>
    )
  }
}


export default Index
