import React, { useMemo } from "react";
import {Container, Profile, Welcome, UserName} from './styles'
import { genereteEmoji } from '../../utils/emojis'
import Toggle from "../Toggle";
const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    return genereteEmoji();
  }, [])
  return (
    <Container>
      <Toggle />
      <Profile>
        <Welcome>Bem Vindo, {emoji} </Welcome>
        <UserName>Leonardo Agostini</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
