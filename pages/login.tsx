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
  password: string,
  message?: string
}

class Login extends React.Component<Props,State> {

  constructor(props:any){
    super(props)
    this.state = {
      email:'',
      password:'',
    }
  }

  private _handleSubmit = (event) => {
    if (event) event.preventDefault()

    const { email, password } = this.state
    Auth.signIn(email,password).then(()=>{
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
          Login
        </Title>
        <form onSubmit={this._handleSubmit}>
          <InputEmail 
            name={'email'}
            onChange={(value?:string)=>{this._handleOnChangeForm(value,'email')}}
          />
          <InputPassword 
            name={'password'}
            onChange={(value?:string)=>{this._handleOnChangeForm(value,'password')}}
          />
          <button type="submit" onClick={this._handleSubmit}>
            Login
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


export default Login
