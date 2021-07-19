import React from "react";
import {Container, Profile, Welcome, UserName} from './styles'

const MainHeader: React.FC = () => {
  return (
  <Container>
    <h2>toggle</h2>
    <Profile>
      <Welcome>
        Bem Vindo, emoji
      </Welcome>
      <UserName>
        Leonardo Agostini
      </UserName>
    </Profile>
  </Container>);
};

export default MainHeader;
