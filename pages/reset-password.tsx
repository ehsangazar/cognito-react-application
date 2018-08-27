import * as React from "react";
import styled from 'styled-components';
import { InputEmail, InputPassword, InputText } from '../Components'


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

class ResetPassword extends React.Component<Props,State> {

  constructor(props:any){
    super(props)
    this.state = {
      code:'',
      password:'',
    }
  }

  private _handleSubmit = (event) => {
    if (event) event.preventDefault()

    const { email, code, password } = this.state
    Auth.forgotPasswordSubmit(email,code,password)
    .then(()=>{
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
          ResetPassword
        </Title>
        <form onSubmit={this._handleSubmit}>
          <InputEmail 
            name={'email'}
            onChange={(value?:string)=>{this._handleOnChangeForm(value,'email')}}
          />
          <InputText 
            name={'code'}
            onChange={(value?:string)=>{this._handleOnChangeForm(value,'code')}}
          />
          <InputPassword 
            name={'newpassword'}
            onChange={(value?:string)=>{this._handleOnChangeForm(value,'password')}}
          />
          <button type="submit" onClick={this._handleSubmit}>
            ResetPassword
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


export default ResetPassword
