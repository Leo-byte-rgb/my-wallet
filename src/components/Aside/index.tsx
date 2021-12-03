import React from 'react';
import {
  Container,
  Header,
  LogImg,
  MenuContainer,
  MenuItemLink,
  Title,
} from './styles';
import logoImg from '../../assets/logo.svg';
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from 'react-icons/md';
const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogImg src={logoImg} alt='Logo minha carteira' />
        <Title>Minha Carteira</Title>
      </Header>
      <MenuContainer>
        <MenuItemLink to='/'>
          <MdDashboard />
          Dashboard
        </MenuItemLink>
        <MenuItemLink to='/list/entry-balance'>
          <MdArrowUpward />
          Entradas
        </MenuItemLink>
        <MenuItemLink to='/list/gains'>
          <MdArrowDownward />
          Saídas
        </MenuItemLink>
        <MenuItemLink to='#'>
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
