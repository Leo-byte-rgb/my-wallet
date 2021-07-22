import styled from "styled-components";

interface ToggleStatus {
  isToggled: boolean;
}
export const ToggleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  color: ${(props) => props.theme.color.white};
`;
export const Toggle = styled.div<ToggleStatus>`
  background-color: ${(props) => props.theme.color.warning};
  width: 52px;
  height: 26px;
  border-radius: 15px;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
    background-color: ${(props) => props.theme.color.white};
    transform: ${(props) => props.isToggled && "translateX(25px)"};
  }
`;
