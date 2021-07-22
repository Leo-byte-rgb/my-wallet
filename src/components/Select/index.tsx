import React from "react";
import { Select } from "./style";
type option = {
  value: string | number;
  label: string | number;
};
interface ISelectInputProps {
  options: Array<option>;
}

const SelectInput: React.FC<ISelectInputProps> = ({ options }) => {
  return (
    <Select>
      {options.map((option) => {
        return <option value={option.value}>{option.label}</option>;
      })}
    </Select>
  );
};
export default SelectInput;
