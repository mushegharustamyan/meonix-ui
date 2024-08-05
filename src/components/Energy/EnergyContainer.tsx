import React from "react";
import Container from "../shared/Container";
import Icon from "../shared/Icon";
import Typography from "../shared/Typography";
import EnergyVector from "../../assets/Energy_Vector.png";
import RocketVector from "../../assets/Rocket_Vector.png";
import TransferVector from "../../assets/Transfer_Horizontal_Vector.png"
import EnergyNumber from "./EnergyNumber";
import EnergyBar from "./EnergyBar";
import Button from "../shared/Button";
import { UserInterface } from "../../context/user/UserContext";

interface EnergyContainerProps {
  user: UserInterface | null;
}
const EnergyContainer: React.FC<EnergyContainerProps> = ({ user }) => {
  const energyLeft = user?.energy ?? 0;
  return (
    <Container
      flexDirection="flex-col"
      backgroundColor="bg-none"
      padding="p-none"
      width="w-full"
      justifyContent="justify-center"
      alignItems="items-center"
    >
      <Container
        flexDirection="flex-row"
        justifyContent="justify-center"
        alignItems="items-center"
        backgroundColor="bg-none"
      >
        <Typography color="#D8F3E3" fontSize="16px" fontWeight="500">
          ENERGY
        </Typography>
        <Icon
          src={EnergyVector}
          alt="Vector Pill"
          width="10px"
          height="18px"
          containerWidth="24px"
          containerHeight="24px"
          iconPosition="center"
        />
        <EnergyNumber energyLeft={energyLeft} />
      </Container>

      <EnergyBar energyLeft={energyLeft} />

      <Container
        flexDirection="flex-row"
        justifyContent="justify-between"
        alignItems="items-center"
        backgroundColor="bg-none"
        width="w-full"
        padding="p-0"
        marginTop="mt-4"
        gap="12px"
      >
        <Button
          buttonText="Boost"
          textColor="#D8F3E3"
          padding="px-4 py-2"
          borderRadius="rounded"
          borderColor="#45454538"
          width="w-full"
          borderSize="border-2"
          disabled={true}
          icon={
            <Icon
              src={RocketVector}
              alt="Rocket Icon"
              width="18px"
              height="18px"
              containerWidth="18px"
              containerHeight="18px"
              iconPosition="center"
            />
          }
          iconPosition="right"
        />

        <Button
          buttonText="Transfer"
          color="#D8F3E3"
          backgroundColor="linear-gradient(131.99deg, #0B6525 0%, #26DE1F 100%)"
          padding="px-4 py-2"
          borderRadius="rounded"
          borderSize="2px"
          width="w-full"
          icon={
            <Icon
              src={TransferVector}
              alt="Rocket Icon"
              width="18px"
              height="18px"
              containerWidth="18px"
              containerHeight="18px"
              iconPosition="center"
            />
          }
          iconPosition="right"

        />
      </Container>
    </Container>
  );
};

export default EnergyContainer;
