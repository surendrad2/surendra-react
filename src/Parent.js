import React, { useRef } from 'react';
import CustomInput from './CustomInput';

const Parent = () => {
  const inputRef = useRef(null);
  const myref = useRef(null)
  const handleFocusButtonClick = () => {
      inputRef.current.focusInput();
  };
  return (
    <div>
      <CustomInput ref={inputRef} placeholder="Enter your name" />
      <button onClick={handleFocusButtonClick}>Focus Input</button>
    </div>
  );
};
export default Parent;