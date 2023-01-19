import React from "react";
import style from './Select.module.less'

interface Option {
  value: string,
  name: string
}

interface SelectProps {
  options: Option[],
  defaultValue: string,
  value: string,
  onChange: (e: string) => void
}

export const Select: React.FC<SelectProps> = ({options, defaultValue, value, onChange}) => {
  return (
      <select className={style.select} value={value} onChange={(e) => onChange(e.target.value)}>

        <option disabled value={"title"}>
          {defaultValue}
        </option>

        {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
        ))}
      </select>
  );
};
