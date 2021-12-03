import styled from 'styled-components';

type ContainerProps = {
  color: string;
};
export const Container = styled.div<ContainerProps>`
  width: 32%;
  height: 150px;

  background-color: ${(props) => props.color};
  color: ${(props) => props.theme.color.white};

  border-radius: 7px;

  padding: 10px 20px;

  position: relative;

  overflow: hidden;

  > img {
    position: absolute;
    height: 110%;
    top: -10px;
    right: -20px;
    overflow: hidden;

    opacity: 0.3;
  }

  > span {
    font-size: 20px;
    font-weight: 500;
  }

  > small {
    font-size: 12px;
    position: absolute;
    bottom: 10px;
  }
`;
