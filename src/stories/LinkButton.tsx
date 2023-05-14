import React from "react";
import * as Icons from "react-icons/ri";
import { IconType } from "react-icons";

interface DynamicRiIconProps {
  name: keyof typeof Icons;
}

const DynamicRiIcon = ({ name }: DynamicRiIconProps) => {
  const IconComponent: IconType = Icons[name];

  if (!IconComponent) {
    // Return a default one
    return <Icons.RiHome5Fill className="w-5 h-5 mr-5" />;
  }

  return <IconComponent className="w-5 h-5 mr-5" />;
};

interface ButtonProps {
  iconName: keyof typeof Icons;
  size?: "tiny" | "small" | "normal" | "large";
}

export const LinkButton = ({
  size = "normal",
  iconName,
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
    <div className="relative w-full group">
      <div className="relative z-50 my-2 ml-4">
        <button
          type="button"
          className={`${buttonSize[size]} text-p_regular text-light-200 group-hover:text-light text-center inline-flex items-center transition duration-200 ease-in-out`}
          {...otherProps}
        >
          <DynamicRiIcon name={iconName} />
          {children}
        </button>
      </div>
      <div className="absolute left-0 invisible top-3 group-hover:visible">
        <div className="absolute w-2 h-8 left-1 bg-primary" />
        <div className="absolute w-14 lg:w-16 h-8 left-3 bg-gradient-to-r from-primary/90 to-primary/0 " />
      </div>
    </div>
  );
};
