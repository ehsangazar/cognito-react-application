import * as React from "react";
import styled from 'styled-components';
import Input from '../Input/Input';

const StyledInputPassword = styled.div`
  color: black;
`;

interface Props {
  onChange?:any,
  name?:string
}

interface State {}

class InputPassword extends React.Component<Props,State> {

  private _handleOnChange = (value?:any) => {
    const { onChange = () => {} } = this.props
    onChange(value)
  }
  
  render () {
    const { 
      name = 'InputPassword'
    } = this.props
    
    return (
      <StyledInputPassword>
        <Input 
          name={name}
          onChange={this._handleOnChange}
          type="password" 
        />
      </StyledInputPassword>
    )
  }
}


export default InputPassword
