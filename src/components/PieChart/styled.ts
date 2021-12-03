import styled from 'styled-components';

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 48%;
  height: 260px;

  margin: 20px 0;

  background-color: ${(props) => props.theme.color.tertiary};
  color: ${(props) => props.theme.color.white};

  border-radius: 7px;

  display: flex;
`;

export const SideLeft = styled.aside`
  padding: 30px 20px;

  h2 {
    margin-bottom: 20px;
  }
`;
export const SideRight = styled.main``;
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

    width: 40px;
    height: 40px;

    border-radius: 5px;

    font-size: 18px;
    font-weight: 600;

    line-height: 40px;
  }

  > span {
    margin-left: 5px;
  }
`;
