import styled from 'styled-components';

export const Container = styled.div`
  width: 48%;
  height: 260px;

  background: ${(props) => props.theme.color.tertiary};
  color: ${(props) => props.theme.color.white};

  border-radius: 7px;

  margin: 20px 0;
  padding: 30px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > header img {
    width: 35px;
    margin-left: 10px;
  }
  > header p {
    font-size: 18px;
  }
`;
export const Header = styled.header``;
