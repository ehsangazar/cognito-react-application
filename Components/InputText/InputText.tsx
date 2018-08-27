import * as React from "react";
import styled from 'styled-components';
import Input from '../Input/Input';

const StyledInputText = styled.div`
  color: black;
`;

interface Props {
  onChange?:any,
  name?:string
}

interface State {}

class InputText extends React.Component<Props,State> {

  private _handleOnChange = (value?:any) => {
    const { onChange = () => {} } = this.props
    onChange(value)
  }
  
  render () {
    const { 
      name = 'InputText'
    } = this.props
    
    return (
      <StyledInputText>
        <Input 
          name={name}
          onChange={this._handleOnChange}
          type="text" 
        />
      </StyledInputText>
    )
  }
}


export default InputText
