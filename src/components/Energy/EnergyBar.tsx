import React from "react";

interface EnergyBarProps {
  energyLeft: number;
  upperBound?: string;
}

const EnergyBar: React.FC<EnergyBarProps> = ({
  energyLeft,
  upperBound = "1000",
}) => {
  const energyPercentage = (energyLeft / parseInt(upperBound)) * 100;

  return (
    <div className="w-full bg-none h-[17px] rounded-[2px] overflow-hidden border-[.5px] border-[#45454538]">
      <div
        className="bg-[#26DE1F] h-full"
        style={{ width: `${energyPercentage}%` }}
      ></div>
    </div>
  );
};

export default EnergyBar;
