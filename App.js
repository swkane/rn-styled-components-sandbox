import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

import Comp from "./Comp";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <Container>
      <Text>Open up App.js to start working on your app!</Text>
      <Comp />
    </Container>
  );
};

export default App;
