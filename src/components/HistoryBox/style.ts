import styled from 'styled-components';

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 100%;
  height: 300px;

  background: ${(props) => props.theme.color.tertiary};
  color: ${(props) => props.theme.color.white};

  border-radius: 7px;

  margin: 20px 0;
  padding: 30px 20px;

  display: flex;
  flex-direction: column;

  > header {
    width: 100%;
    height: 50px;

    margin-bottom: 30px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    > div {
      display: flex;
      flex-direction: row;
      gap: 30px;
    }
  }
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;

  margin-bottom: 7px;
  font-size: 16px;

  > div {
    background: ${(props) => props.color};

    width: 80px;
    height: 40px;

    border-radius: 5px;

    font-size: 18px;
    font-weight: 600;

    line-height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  > span {
    margin-left: 5px;
  }
`;
