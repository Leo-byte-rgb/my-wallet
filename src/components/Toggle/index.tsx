import React, { useState } from "react";
import { Toggle, ToggleContainer} from './style';

const ToggleComponent: React.FC = () => {
      const [toggle, setToggle] = useState(false);
    return (
      <ToggleContainer onClick={() => setToggle(!toggle)}>
        Light <Toggle isToggled={toggle} /> Dark
      </ToggleContainer>
    );
}

export default ToggleComponent;