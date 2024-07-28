import React, { CSSProperties } from "react";

interface IconProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
  containerWidth?: string;
  containerHeight?: string;
  iconPosition?: "center";
}

const Icon: React.FC<IconProps> = ({
  src,
  alt,
  width = "w-auto",
  height = "h-auto",
  className = "",
  containerWidth = "w-auto",
  containerHeight = "h-auto",
  iconPosition,
}) => {
  const isCustomWidth = width.includes("px") || width.includes("%");
  const isCustomHeight = height.includes("px") || height.includes("%");

  const isCustomContainerWidth =
    containerWidth.includes("px") || containerWidth.includes("%");
  const isCustomContainerHeight =
    containerHeight.includes("px") || containerHeight.includes("%");

  const iconStyles = `${!isCustomWidth ? width : ""} ${
    !isCustomHeight ? height : ""
  } ${className}`;

  const containerStyles = `${!isCustomContainerWidth ? containerWidth : ""} ${
    !isCustomContainerHeight ? containerHeight : ""
  } flex ${iconPosition === "center" ? "justify-center items-center" : ""}`;

  const customStyle: CSSProperties = {
    ...(isCustomWidth && { width }),
    ...(isCustomHeight && { height }),
  };

  const customContainerStyle: CSSProperties = {
    ...(isCustomContainerWidth && { width: containerWidth }),
    ...(isCustomContainerHeight && { height: containerHeight }),
  };

  return (
    <div className={containerStyles} style={customContainerStyle}>
      <img src={src} alt={alt} className={iconStyles} style={customStyle} />
    </div>
  );
};

export default Icon;
