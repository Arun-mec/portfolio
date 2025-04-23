import React from "react";

const Button = ({
  onclick,
  content,
  tag,
  type = "Button",
  varient = "Primary",
  disabled = false,
  className,
}) => {
  const buttonClass = `text-primary text-md font-primary border-[0.1rem] max-w-fit
    border-primary p-2 rounded hover:bg-primary hover:text-dark 
    transition-all cursor-pointer ${varient} ${disabled ? "disabled" : ""} ${className}`;

  return (
    <button
      className={buttonClass}
      type={type}
      onClick={onclick}
      disabled={disabled}
    >
      {content}
      {tag}
    </button>
  );
};
export default Button;
