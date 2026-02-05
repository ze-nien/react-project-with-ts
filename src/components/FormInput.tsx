import React, { useRef } from "react";

const FormInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    //有元素就focus 反之什麼都不做(不報錯)
    inputRef.current?.focus();
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Click the button to focus me"
      />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default FormInput;
