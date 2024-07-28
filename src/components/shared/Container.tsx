import React, { ReactNode, CSSProperties } from "react";

interface ContainerProps {
  backgroundColor?: string;
  justifyContent?: string;
  display?: string;
  alignItems?: string;
  height?: string;
  width?: string;
  flexDirection?: string;
  padding?: string;
  marginTop?: string;
  gap?: string;
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  backgroundColor = "bg-white",
  justifyContent = "justify-start",
  display = "flex",
  alignItems = "items-start",
  height = "h-auto",
  width = "w-auto",
  flexDirection = "flex-row",
  padding = "p-4",
  marginTop = "mt-0",
  gap = "0",
  children,
}) => {
  const isCustomColor = backgroundColor.startsWith("#");
  const isCustomHeight = height.includes("px") || height.includes("%");
  const isCustomWidth = width.includes("px") || width.includes("%");

  const containerStyles = `${
    !isCustomColor ? backgroundColor : ""
  } ${justifyContent} ${display} ${alignItems} ${flexDirection} ${padding} ${marginTop} ${
    !isCustomHeight ? height : ""
  } ${!isCustomWidth ? width : ""}`;

  const customStyle: CSSProperties = {
    ...(isCustomColor && { backgroundColor }),
    ...(isCustomHeight && { height }),
    ...(isCustomWidth && { width }),
    gap,
  };

  return (
    <div className={containerStyles} style={customStyle}>
      {children}
    </div>
  );
};

export default Container;
