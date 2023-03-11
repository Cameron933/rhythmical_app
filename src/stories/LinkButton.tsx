import React from "react";

interface ButtonProps {
  iconPath: string;
  size?: "tiny" | "small" | "normal" | "large";
}

export const LinkButton = ({
  size = "normal",
  iconPath,
  children,
  ...otherProps
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const buttonSize = {
    tiny: "py-0.25 px-1",
    small: "py-0.75 px-2",
    normal: "py-1.5 px-3",
    large: "py-3 px-6",
  };

  return (
    <button
      type="button"
      className={`${buttonSize[size]} text-p_regular text-light-200 hover:text-light text-center inline-flex items-center transition duration-200 ease-in-out`}
      {...otherProps}
    >
      <svg className="w-5 h-5 mr-5" viewBox="0 0 1024 1024" xmlns={`${iconPath}`}>
        <path
          fill="currentColor"
          d="M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z"
        />
      </svg>
      {children}
    </button>
  );
};
