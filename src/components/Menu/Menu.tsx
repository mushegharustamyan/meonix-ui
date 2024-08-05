import React from "react";
import Container from "../shared/Container";
import Button from "../shared/Button";
import Icon from "../shared/Icon";
import HomeVector from "../../assets/Home_Vector.png";
import TaskVector from "../../assets/Task_Vector.png";
import NftIcon from "../../assets/NFT_Icon.png";
import UsersGroupIcon from "../../assets/Users_Group_Vector.png"

const Menu: React.FC = () => {
  return (
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
        borderSize="border-2"
        width="w-full"
        icon={
          <Icon
            src={HomeVector}
            alt="Rocket Icon"
            width="24px"
            height="24px"
            containerWidth="24px"
            containerHeight="24px"
            iconPosition="center"
          />
        }
        iconPosition="top"
      />

      <Button
        buttonText="Tasks"
        textColor="#D8F3E3"
        padding="px-4 py-2"
        borderSize="border-0"
        width="w-full"
        icon={
          <Icon
            src={TaskVector}
            alt="Rocket Icon"
            width="24px"
            height="24px"
            containerWidth="24px"
            containerHeight="24px"
            iconPosition="center"
          />
        }
        iconPosition="top"
      />
      <Button
        buttonText="Friends"
        textColor="#D8F3E3"
        padding="px-4 py-2"
        borderSize="border-0"
        width="w-full"
        icon={
          <Icon
            src={UsersGroupIcon}
            alt="Rocket Icon"
            width="24px"
            height="24px"
            containerWidth="24px"
            containerHeight="24px"
            iconPosition="center"
          />
        }
        iconPosition="top"
      />
      <Button
        buttonText="NFT"
        textColor="#D8F3E3"
        padding="px-4 py-2"
        width="w-full"
        borderSize="border-0"
        icon={
          <Icon
            src={NftIcon}
            alt="Rocket Icon"
            width="24px"
            height="24px"
            containerWidth="24px"
            containerHeight="24px"
            iconPosition="center"
          />
        }
        iconPosition="top"
        alignItems="center"
        justifyContent="center"
      />
    </Container>
  );
};

export default Menu;
