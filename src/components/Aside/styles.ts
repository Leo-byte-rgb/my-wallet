import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.aside`
  grid-area: AS;
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.secondary};
  padding-left: 20px;
  border-right: 1px solid ${(props) => props.theme.color.gray};
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 70px;
`;

export const LogImg = styled.img`
  height: 40px;
  width: 40px;
`;
export const MenuContainer = styled.nav`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  gap: 20px;
`;
export const MenuItemLink = styled(Link)`
  color: ${(props) => props.theme.color.info};
  text-decoration: none;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;
  gap: 6px;
  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 20px;
  }
`;
export const Title = styled.h3`
  color: ${(props) => props.theme.color.white};
`;
