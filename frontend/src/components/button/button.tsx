"use client";
import React from "react";

interface ButtonProps {
  value: string;
  handlerOnClick: React.MouseEventHandler;
}

function MyButton({ value, handlerOnClick }: ButtonProps) {
  return (
    <button
      data-testid="userButton"
      className="m-0 body-regular buttonStyle "
      onClick={handlerOnClick}
      type="submit"
    >
      {value}
    </button>
  );
}

export default MyButton;
