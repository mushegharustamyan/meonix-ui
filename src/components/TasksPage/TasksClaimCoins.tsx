import Typography from "../shared/Typography";
import Button from "../shared/Button";
import Container from "../shared/Container";
import React from "react";
import { UserInterface } from "../../context/user/UserContext";

interface TasksClaimCoinsProps {
  user: UserInterface | null;
}
export const TasksClaimCoins: React.FC<TasksClaimCoinsProps> = ({ user }) => {
  return (
    <Container
      flexDirection="flex-row"
      justifyContent="justify-center"
      alignItems="items-center"
      backgroundColor="#111214"
      padding="px-[10px]"
      width="w-full"
      height="66px"
      marginTop="mt-8"
    >
      <div className="w-1/2 flex flex-row items-center gap-[10px]">
        <div className="w-[32px] h-[32px] rounded-full bg-[#3F7643] flex flex-row items-center justify-center">
          <Typography
            color="#D8F3E3"
            fontFamily="font-mono"
            fontSize="12px"
            fontWeight="500"
            lineHeight="12px"
          >
            MP
          </Typography>
        </div>
        <div className="w-[79px] h-[24px] text-white flex-row items-center justify-center">
          <Typography
            color="#D8F3E3"
            fontFamily="font-mono"
            fontSize="16px"
            fontWeight="500"
            lineHeight="24px"
          >
            {user?.coins} MP
          </Typography>
        </div>
      </div>

      <div className="w-1/2 flex flex-row items-center ">
        <Button
          buttonText={"Claim Now"}
          backgroundColor="#00A530"
          width="w-full"
          padding="py-[12px] px-[28px]"
          borderRadius="rounded-xl"
        />
      </div>
    </Container>
  );
};
