import * as React from "react";
import styled from 'styled-components';
import { InputEmail, InputPassword } from '../Components'


// Amplify AWS Congnito
import Amplify, { Auth } from 'aws-amplify';
import CognitoConfig from '../Configs/Cognito.config'
Amplify.configure(CognitoConfig);

const Title = styled.h1`
  color: red;
`;

interface Props {}

interface State {
  email: string,
  message?: string
}

class ForgetPassword extends React.Component<Props,State> {

  constructor(props:any){
    super(props)
    this.state = {
      email:''
    }
  }

  private _handleSubmit = (event) => {
    if (event) event.preventDefault()

    const { email } = this.state

    Auth.forgotPassword(email).then(()=>{
      this.setState({
        message: 'Successful'
      })
    }).catch((response:any)=>{
      if (response.message){
        this.setState({
          message: response.message
        })
      }
    })
    ;
  }

  private _handleOnChangeForm = (value?:string,name?:string) => {
    this.setState({[name]: value})
  }

  render () {
    const { message } = this.state
    return (
      <div>
        <Title>
          Forget Password
        </Title>
        <form onSubmit={this._handleSubmit}>
          <InputEmail 
            name={'email'}
            onChange={(value?:string)=>{this._handleOnChangeForm(value,'email')}}
          />
          <button type="submit" onClick={this._handleSubmit}>
            Forget Password
          </button>

          {message &&
            <p style={{color:'red'}}>
              {message}
            </p>
          }
        </form>
      </div>
    )
  }
}


export default ForgetPassword
