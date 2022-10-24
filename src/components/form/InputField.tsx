import React from "react";

type inputFieldProps = {
  placeholder: string;
  value: string;
  type: string;
  label?: string;
  className: string
  onChange: () => string[];
};

const InputField = ({
  placeholder,
  value,
  type,
  label,
  className,
  onChange,
}: inputFieldProps) => {
  return (
    <div>
        <label>{label}</label>
      <input placeholder={placeholder} value={value} type={type} onChange={onChange} className={className}  />
    </div>
  );
};

export default InputField;
