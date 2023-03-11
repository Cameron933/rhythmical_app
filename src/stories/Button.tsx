import React from "react";

type ButtonVariant = "normal" | "icon";
type ButtonColor = "primary" | "secondary" | "ternary" | "warning" | "info" | "light" | "dark";
interface ButtonProps {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: "tiny" | "small" | "normal" | "large";
}

export const Button = ({
  variant = "normal",
  color = "primary",
  size = "normal",
  children,
  ...otherProps
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const colorVariants = {
    primary:
      "bg-primary hover:bg-primary-400 disabled:bg-primary-100 text-light focus:bg-transparent focus:border focus:border-primary",
    secondary:
      "bg-secondary hover:bg-secondary-400 disabled:bg-secondary-400 text-light focus:bg-transparent focus:border focus:border-secondary",
    ternary:
      "bg-ternary hover:bg-ternary-400 disabled:bg-ternary-100 text-light focus:bg-transparent focus:border focus:border-ternary",
    warning:
      "bg-warning hover:bg-warning-400 disabled:bg-warning-100 text-light focus:bg-transparent focus:border focus:border-warning",
    info: "bg-info hover:bg-info-400 disabled:bg-info-100 text-light focus:bg-transparent focus:border focus:border-info",
    light:
      "bg-light hover:bg-light-400 disabled:bg-light-100 text-dark focus:bg-transparent focus:border focus:border-light focus:text-light",
    dark: "bg-dark hover:bg-dark-400 disabled:bg-dark-100 text-light focus:bg-transparent focus:border focus:border-dark focus:text-dark",
  };
  const buttonSize = {
    tiny: "py-0.25 px-1",
    small: "py-0.75 px-2",
    normal: "py-1.5 px-3",
    large: "py-3 px-6",
  };
  const iconSize = {
    tiny: "p-0.25",
    small: "p-1",
    normal: "p-2",
    large: "p-3",
  };

  return variant === "icon" ? (
    <button
      type="button"
      className={`${colorVariants[color]} ${iconSize[size]} rounded-full transition duration-200 ease-in-out`}
      {...otherProps}
    >
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  ) : (
    <button
      type="button"
      className={`${colorVariants[color]} ${buttonSize[size]} text-base_regular rounded-full transition duration-200 ease-in-out`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
