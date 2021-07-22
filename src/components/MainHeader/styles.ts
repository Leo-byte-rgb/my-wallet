import styled from "styled-components";
export const Container = styled.header`
  grid-area: MH;
  background-color: ${(props) => props.theme.color.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 10px;
  border-bottom: 1px solid ${(props) => props.theme.color.gray};
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.color.white};
`;
export const Welcome = styled.h3``;
export const UserName = styled.span``;
