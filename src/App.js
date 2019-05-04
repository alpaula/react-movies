import React from 'react';
import styled from 'styled-components';

// Components
import Movies from './Movies';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #111;
  box-sizing: border-box;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
    <Container className="App">
      <Movies />
    </Container>
  );
  }
}

export default App;
