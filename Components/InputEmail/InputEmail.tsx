import * as React from "react";
import styled from 'styled-components';
import Input from '../Input/Input';

const StyledInputEmail = styled.div`
  color: black;
`;

interface Props {
  onChange?:any,
  name?:string
}

interface State {}

class InputEmail extends React.Component<Props,State> {

  private _handleOnChange = (value?:any) => {
    const { onChange = () => {} } = this.props
    onChange(value)
  }
  
  render () {
    const { 
      name = 'InputEmail'
    } = this.props
    
    return (
      <StyledInputEmail>
        <Input 
          name={name}
          onChange={this._handleOnChange}
          type="email" 
        />
      </StyledInputEmail>
    )
  }
}


export default InputEmail
