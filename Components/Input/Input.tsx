import * as React from "react";
import styled from 'styled-components';

const StyledInput = styled.input`
  color: black;
`;

interface Props {
  type?:string,
  onChange?:any,
  name?:string
}

interface State {}

class Input extends React.Component<Props,State> {

  private _handleOnChange = (event?:any) => {
    const { onChange = () => {} } = this.props
    onChange(event.target.value)
  }
  
  render () {
    const { 
      type = 'text',
      name = 'InputText'
    } = this.props

    return (
      <StyledInput
        name={name}
        placeholder={name}
        type={type}
        onChange={this._handleOnChange}
      />
    )
  }
}


export default Input
