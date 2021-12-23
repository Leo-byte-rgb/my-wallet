import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.color.primary};
`;

export const Form = styled.form`
  width: 300px;
  height: 300px;

  padding: 30px;

  border-radius: 10px;

  background: ${(props) => props.theme.color.tertiary};
`;

export const FormTitle = styled.h1`
  color: ${(props) => props.theme.color.white};

  margin-bottom: 40px;

  &::after {
    content: '';
    display: block;
    width: 55px;
    border-bottom: 10px solid ${(props) => props.theme.color.warning};
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 30px;

  > h2 {
    color: ${(props) => props.theme.color.white};
    margin-left: 7px;
  }

  > img {
    width: 50px;
    height: 50px;
  }
`;
