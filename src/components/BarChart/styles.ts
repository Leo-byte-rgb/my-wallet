import styled from 'styled-components';

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 48%;
  min-width: 260px;
  min-height: 260px;

  margin: 10px 0;

  background-color: ${(props) => props.theme.color.tertiary};

  border-radius: 7px;

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const SideLeft = styled.div`
  padding: 30px 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 30%;
  height: 100%;
  > h2 {
    margin-bottom: 10px;
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;

  max-height: 170px;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-color: ${(props) => props.theme.color.secondary};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-tract {
    border-color: ${(props) => props.theme.color.tertiary};
  }
`;
export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;

  margin-bottom: 7px;
  font-size: 16px;

  > div {
    background: ${(props) => props.color};

    width: 55px;
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

export const SideRight = styled.div`
  width: 60%;
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
