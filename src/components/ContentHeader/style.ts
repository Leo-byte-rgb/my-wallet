import styled from "styled-components";

interface IContainerProps {
  lineColor: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  button {
    width: 100px;
    height: 25px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.color.warning};
    color: ${(props) => props.theme.color.white};
    transition: all 0.3s;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
export const TitleContainer = styled.div<IContainerProps>`
  > h1 {
    color: ${(props) => props.theme.color.white};
    &::after {
      content: "";
      display: block;
      width: 55px;
      border-bottom: 10px solid ${(props) => props.lineColor};
    }
  }
`;

export const Controllers = styled.div`
  display: flex;
  gap: 25px;
`;
