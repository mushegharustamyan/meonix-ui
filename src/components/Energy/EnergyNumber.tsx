import React from "react";
import Typography from "../shared/Typography";

interface EnergyNumberProps {
  energyLeft: number;
  upperBound?: number;
}

const EnergyNumber: React.FC<EnergyNumberProps> = ({
  energyLeft,
  upperBound = "1000",
}) => {
  const displayEnergy = `${energyLeft}/${upperBound}`;

  return (
    <Typography
      color="#D8F3E3"
      fontFamily="font-mono"
      fontSize="text-lg"
      fontWeight="font-bold"
    >
      {displayEnergy}
    </Typography>
  );
};

export default EnergyNumber;
