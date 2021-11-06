import React, { useMemo } from "react";
import { Container, Profile, Welcome, UserName } from "./styles";
import { genereteEmoji } from "../../utils/emojis";
import Toggle from "../Toggle";
import { useTheme } from "../../hooks/useTheme";
const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    return genereteEmoji();
  }, []);
  const { toggleTheme } = useTheme();
  return (
    <Container>
      <Toggle additionalAction={toggleTheme} />
      <Profile>
        <Welcome>Bem Vindo, {emoji} </Welcome>
        <UserName>Leonardo Agostini</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
