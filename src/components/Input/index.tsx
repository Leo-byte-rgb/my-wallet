import React, { InputHTMLAttributes } from 'react';
import { InputUI } from './style';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<IInputProps> = ({ ...props }) => (
  <>
    <InputUI {...props} />
  </>
);

export default Input;
