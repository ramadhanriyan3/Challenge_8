"use client";
import { css, cx } from "@emotion/css";
import { useContext } from "react";
import { ButtonTypeContext } from "../buttonTypeContext";

const noBackground = css`
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  background: white;
  border-radius: 2px;
  border: 1px #0d28a6 solid;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
  color: #0d28a6;
  font-family: Helvetica;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease;
  }
  &:active {
    transform: scale(1);
    transition: all 0.3s ease;
  }
`;
interface BasicButtonProps {
  label: string;
  handlerOnClick: any;
}
export default function BasicButton({
  handlerOnClick,
  label,
}: BasicButtonProps) {
  const buttonType = useContext(ButtonTypeContext);
  return (
    <>
      <button
        data-testid="basicButton"
        type={buttonType}
        onClick={handlerOnClick}
        className={cx(noBackground)}
      >
        {label}
      </button>
    </>
  );
}
