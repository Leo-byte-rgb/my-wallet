import React, { SelectHTMLAttributes } from "react";
import { Select } from "./style";
type option = {
  value: string | number;
  label: string | number;
};
interface ISelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Array<option>;
}

const SelectInput: React.FC<ISelectInputProps> = ({ options, ...rest }) => {
  return (
    <Select {...rest}>
      {options.map((option) => {
        return (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        );
      })}
    </Select>
  );
};
export default SelectInput;
