import React from "react";
import Container from "../shared/Container";
import Button from "../shared/Button";
import Icon from "../shared/Icon";
import HomeVectorActive from "../../assets/Home_Vector_Active.png";
import HomeVector from "../../assets/Home_Vector.png";
import TaskVector from "../../assets/Task_Vector.png";
import TaskVectorActive from "../../assets/Task_Vector_Active.png";
import NftIcon from "../../assets/NFT_Icon.png";
import UsersGroup from "../../assets/Users_Group_Vector.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../context/user/UserContext";

const Menu: React.FC = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const getIconSrc = (
    path: string,
    defaultIcon: string,
    activeIcon: string,
  ): string => {
    return location.pathname.startsWith(path) ? activeIcon : defaultIcon;
  };

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
            src={getIconSrc("/welcome", HomeVector, HomeVectorActive)}
            alt="Rocket Icon"
            width="24px"
            height="24px"
            containerWidth="24px"
            containerHeight="24px"
            iconPosition="center"
          />
        }
        iconPosition="top"
        onClick={() => navigate(`/welcome/${user?.telegramId}`)}
      />

      <Button
        buttonText="Tasks"
        textColor="#D8F3E3"
        padding="px-4 py-2"
        borderSize="border-0"
        width="w-full"
        icon={
          <Icon
            src={getIconSrc("/tasks", TaskVector, TaskVectorActive)}
            alt="Rocket Icon"
            width="24px"
            height="24px"
            containerWidth="24px"
            containerHeight="24px"
            iconPosition="center"
          />
        }
        iconPosition="top"
        onClick={() => navigate(`/tasks/${user?.telegramId}`)}
      />
      <Button
        buttonText="Friends"
        textColor="#D8F3E3"
        padding="px-4 py-2"
        borderSize="border-0"
        width="w-full"
        icon={
          <Icon
            src={UsersGroup}
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
