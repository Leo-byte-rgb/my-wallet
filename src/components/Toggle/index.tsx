import React from "react";
import { useTheme } from "../../hooks/useTheme";
import { Toggle, ToggleContainer } from "./style";

interface IToggleComponent {
  additionalAction?: () => void;
}

const ToggleComponent: React.FC<IToggleComponent> = ({ additionalAction }) => {
  const { theme } = useTheme();
  return (
    <ToggleContainer onClick={() => !!additionalAction && additionalAction()}>
      Light <Toggle isToggled={theme === "Dark" ? true : false} /> Dark
    </ToggleContainer>
  );
};

export default ToggleComponent;
