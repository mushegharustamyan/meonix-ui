import React, { CSSProperties, ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  color?: string;
  fontFamily?: string;
  lineHeight?: string;
  fontSize?: string;
  fontWeight?: string;
  className?: string;
  customStyle?: CSSProperties;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  color = "text-black",
  fontFamily = "font-sans",
  fontSize = "text-base",
  fontWeight = "font-normal",
  lineHeight = "leading-[42px]",
  className = "",
  customStyle = {},
}) => {
  const isCustomColor = color.startsWith("#") || color.startsWith("rgb");
  const isCustomFontSize = fontSize.includes("px") || fontSize.includes("%");
  const isCustomFontWeight = fontWeight.includes("00");
  const isCustomLineHeight = lineHeight.includes("px");

  const typographyClasses = `${!isCustomColor ? color : ""} ${fontFamily} ${
    !isCustomFontSize ? fontSize : ""
  } ${!isCustomFontWeight ? fontWeight : ""}
   ${!isCustomLineHeight ? lineHeight : ""}
   ${className}`;

  const inlineStyle: CSSProperties = {
    ...(isCustomColor && { color }),
    ...(isCustomFontSize && { fontSize }),
    ...(isCustomFontWeight && { fontWeight }),
    ...(isCustomLineHeight && { lineHeight }),
    ...customStyle,
  };

  return (
    <p className={typographyClasses} style={inlineStyle}>
      {children}
    </p>
  );
};

export default Typography;
