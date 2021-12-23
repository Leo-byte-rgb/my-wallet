import React, { ButtonHTMLAttributes } from 'react';
import { ButtonUI } from './style';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<IButtonProps> = ({ ...props }) => (
  <>
    <ButtonUI {...props} />
  </>
);

export default Button;
