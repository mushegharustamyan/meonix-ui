import React from "react";

interface IRoundLogoButtonProps {
  logoUrl: string;
  companyName: string;
}
const RoundLogoButton: React.FC<IRoundLogoButtonProps> = ({
  logoUrl,
  companyName,
}) => {
  return (
    <div className="flex flex-row px-2">
      <button className="flex items-center space-x-3 rtl:space-x-reverse rounded-xl overflow-hidden">
        <img src={logoUrl} className="h-8" alt="Meonix Logo" />
      </button>
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white mx-2">
        {companyName}
      </span>
    </div>
  );
};

export default RoundLogoButton;
