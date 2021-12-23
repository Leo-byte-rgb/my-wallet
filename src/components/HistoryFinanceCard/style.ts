import styled from 'styled-components';

interface ITagProps {
  color: string;
}

export const Container = styled.li`
  background-color: ${(props) => props.theme.color.tertiary};
  list-style: none;
  border-radius: 10px;
  margin: 10px 0;
  padding: 12px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  position: relative;
  transition: all 0.4s;
  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  > div > span {
    font-weight: 600;
    font-size: 22px;
  }
`;
export const Tag = styled.div<ITagProps>`
  width: 10px;
  height: 60%;
  position: absolute;
  background-color: ${(props) => props.color};
  left: 0;
`;
