import { cn } from "@/utils/util";
import React from "react";
import { MouseEventHandler } from "react";

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
  text?: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
};

export default function Button({
  icon,
  iconPosition = "left",
  text,
  onClick,
  onMouseLeave,
  onMouseEnter,
  className,
  type,
  disabled,
}: ButtonProps) {
  const mergedClasses = cn(
    "md:font-semibold text-base flex items-center justify-center gap-2 h-[38px] md:h-[48px] rounded-[8px] border-[1px] px-2 md:px-4 py-2 md:py-3 transition duration-[.2s] disabled:opacity-50 disabled:cursor-not-allowed",
    className
  );
  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      disabled={disabled ?? false}
      className={mergedClasses}
    >
      {icon && iconPosition == "left" ? icon : null}
      {text ?? text}
      {icon && iconPosition == "right" ? icon : null}
    </button>
  );
}
