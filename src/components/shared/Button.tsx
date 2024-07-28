import React, { CSSProperties, ReactNode } from "react";
import Typography from "./Typography";

interface ButtonProps {
  buttonText: string;
  onClick?: () => void;
  color?: string; // For button text color
  backgroundColor?: string;
  padding?: string;
  borderRadius?: string;
  borderSize?: string;
  borderColor?: string;
  width?: string;
  className?: string;
  customStyle?: CSSProperties;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: "top" | "left" | "right" | "bottom";
  textColor?: string;
  textSize?: string;
  justifyContent?: string; // New prop for justifyContent
  alignItems?: string; // New prop for alignItems
}

const Button: React.FC<ButtonProps> = ({
  buttonText,
  onClick,
  color = "text-white",
  backgroundColor = "bg-none",
  padding = "px-4 py-2",
  borderRadius = "rounded",
  borderSize = "border",
  borderColor = "border-none",
  width = "w-auto",
  className = "",
  customStyle = {},
  disabled = false,
  icon,
  iconPosition = "left",
  textColor = "text-white", // Default text color
  textSize = "text-base", // Default text size
  justifyContent = "justify-center", // Default to center
  alignItems = "items-center", // Default to center
}) => {
  const isCustomColor = color.startsWith("#") || color.startsWith("rgb");
  const isGradient = backgroundColor.includes("linear-gradient");
  const isCustomBackgroundColor =
    backgroundColor.startsWith("#") ||
    backgroundColor.startsWith("rgb") ||
    isGradient;
  const isCustomWidth = width.includes("px") || width.includes("%");

  const isCustomBorderSize =
    borderSize.includes("px") ||
    borderSize.includes("em") ||
    borderSize.includes("rem");
  const isCustomBorderColor =
    borderColor.startsWith("#") || borderColor.startsWith("rgb");

  const buttonClasses = `${!isCustomColor ? color : ""} ${
    !isGradient && !isCustomBackgroundColor ? backgroundColor : ""
  } ${padding} ${borderRadius} ${!isCustomBorderSize ? borderSize : ""} ${
    !isCustomBorderColor ? borderColor : ""
  } ${!isCustomWidth ? width : ""} ${className} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  } flex ${icon ? "flex items-center" : ""} ${justifyContent} ${alignItems}`;

  const iconClasses = {
    top: "flex-col",
    left: "flex-row",
    right: "flex-row-reverse",
    bottom: "flex-col-reverse",
  }[iconPosition];

  const marginClasses = {
    top: "mb-2",
    left: "mr-2",
    right: "ml-2",
    bottom: "mt-2",
  }[iconPosition];

  const inlineStyle: CSSProperties = {
    ...(isCustomColor && { color }),
    ...(isCustomBackgroundColor && {
      backgroundColor: disabled ? "#B2CDBD1A" : backgroundColor,
    }),
    ...(isGradient && { background: backgroundColor }),
    ...(isCustomWidth && { width }),
    ...(isCustomBorderSize && { borderWidth: borderSize }),
    ...(isCustomBorderColor && { borderColor }),
    ...customStyle,
  };

  return (
    <button
      className={`${buttonClasses} ${iconClasses}`}
      style={inlineStyle}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      {icon && <span className={`${marginClasses}`}>{icon}</span>}
      <Typography
        fontSize={textSize}
        fontWeight="500" // Default font weight
        color={textColor}
      >
        {buttonText}
      </Typography>
    </button>
  );
};

export default Button;
