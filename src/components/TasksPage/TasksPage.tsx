import React from "react";
import Typography from "../shared/Typography";
import Container from "../shared/Container";
import Menu from "../Menu/Menu";
import {
  TaskTypeEnum,
  UserProvider,
  useUser,
} from "../../context/user/UserContext";
import { TasksClaimCoins } from "./TasksClaimCoins";
import { TasksList } from "./TasksList";

const TasksPage: React.FC = () => {
  const { user, loading, userTasks } = useUser();

  if (!user && loading) {
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
        flexDirection="flex-col"
        justifyContent="justify-center"
        alignItems="items-center"
        backgroundColor="bg-none"
        padding="p-none"
      >
        <Typography color="#D8F3E3" fontSize="28px" fontWeight="600">
          TASKS
        </Typography>
        <Container
          flexDirection="flex-col"
          justifyContent="justify-center"
          alignItems="items-center"
          backgroundColor="bg-none"
          padding="p-none"
          width="282px"
        >
          <Typography
            color="#D8F3E3BD"
            fontSize="12px"
            fontWeight="500"
            lineHeight="18px"
            customStyle={{ textAlign: "center" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
        </Container>
      </Container>
      <TasksClaimCoins user={user} />{" "}
      <Container
        flexDirection="flex-row"
        justifyContent="justify-start"
        alignItems="items-start"
        width="w-full"
      >
        <Typography
          color="#D8F3E3"
          fontSize="16px"
          fontWeight="600"
          lineHeight="24px"
          customStyle={{ textAlign: "center" }}
        >
          Social Media
        </Typography>
      </Container>
      <TasksList userTasks={userTasks} taskType={TaskTypeEnum.SOCIAL_MEDIA} />
      <Container
        flexDirection="flex-row"
        justifyContent="justify-start"
        alignItems="items-start"
        width="w-full"
      >
        <Typography
          color="#D8F3E3"
          fontSize="16px"
          fontWeight="600"
          lineHeight="24px"
          customStyle={{ textAlign: "center" }}
        >
          Friend Invitations
        </Typography>
      </Container>
      <TasksList
        userTasks={userTasks}
        taskType={TaskTypeEnum.FRIEND_INVITATION}
      />
      <Menu />
    </Container>
  );
};

const TaskPageWrapper: React.FC = () => (
  <UserProvider>
    <TasksPage />
  </UserProvider>
);

export default TaskPageWrapper;
