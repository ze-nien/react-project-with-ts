import React from "react";

const Button = ({
  label,
  onclick,
  disabled,
}: {
  label: string;
  onclick: () => void;
  disabled: boolean;
}) => {
  return (
    <label>
      <button onClick={onclick} disabled={disabled}>
        {label}
      </button>
    </label>
  );
};

export default Button;
