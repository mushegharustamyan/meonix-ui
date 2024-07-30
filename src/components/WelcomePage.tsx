import React, { useEffect } from "react";
import { UserProvider, useUser } from "../context/user/UserContext";
import Container from "./shared/Container";
import Icon from "./shared/Icon";
import PillVector from "../assets/Pill_Vector.png";
import Typography from "./shared/Typography";
import EnergyContainer from "./Energy/EnergyContainer";
import Menu from "./Menu/Menu";

const WelcomePage: React.FC = () => {
  const { user, loading } = useUser();

  useEffect(() => {
    console.log("aaa");
  });
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        Loading...
      </div>
    );
  }

  return (
    <Container
      backgroundColor="#050605"
      justifyContent="justify-center"
      display="flex"
      alignItems="items-center"
      height="h-full"
      width="w-full"
      flexDirection="flex-col"
    >
      <Typography
        color="#D8F3E3"
        fontFamily="font-mono"
        fontSize="text-lg"
        fontWeight="font-bold"
      >
        {user?.username}
      </Typography>
      <Container
        flexDirection="flex-row"
        justifyContent="justify-center"
        alignItems="items-center"
        backgroundColor="bg-none"
      >
        <Icon src={PillVector} alt="Vector Pill" width="48px" height="48px" />
        <Typography color="#D8F3E3" fontSize="28px" fontWeight="500">
          7.458 M {user?.energy}
        </Typography>
      </Container>
      {/*TODO INSERT CHARACTER*/}
      <div className="bg-[#050605] h-96"></div>
      <EnergyContainer user={user} />

      <Menu />
    </Container>
  );
};

const WelcomePageWrapper: React.FC = () => (
  <UserProvider>
    <WelcomePage />
  </UserProvider>
);

export default WelcomePageWrapper;
