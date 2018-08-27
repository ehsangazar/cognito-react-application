import * as React from "react";
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
`;

interface Props {}

interface State {}

class Index extends React.Component<Props,State> {
  render () {
    return (
      <div>
        <Title>
          Welcome
        </Title>
        to NextJs TypeScript StyledComponent
      </div>
    )
  }
}


export default Index
