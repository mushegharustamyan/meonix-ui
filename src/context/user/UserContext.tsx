import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export enum TaskTypeEnum {
  SOCIAL_MEDIA = "SOCIAL_MEDIA",
  FRIEND_INVITATION = "FRIEND_INVITATION",
}
export interface TaskInterface {
  id: number;
  title: string;
  points: number;
  type: TaskTypeEnum;
  status: string;
}

export interface UserInterface {
  username: string;
  telegramId: string;
  energy: number;
  coins: number;
  tasks: TaskInterface[];
}

interface UserContextProps {
  user: UserInterface | null;
  userTasks: TaskInterface[] | null;
  loading: boolean;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { telegramId } = useParams<{ telegramId: string }>();
  const [user, setUser] = useState<UserInterface | null>(null);
  const [userTasks, setUserTasks] = useState<TaskInterface[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserTasks = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3030/graphql",
          {
            query: `
              query FindUserTasks($userId: String!) {
                findUserTasks(userId: $userId) {
                  id
                  username
                  telegramId
                  energy
                  coins
                  tasks {
                    id
                    title
                    points
                    type
                    status
                  }
                }
              }
            `,
            variables: {
              userId: telegramId,
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        const userData = response.data.data.findUserTasks;
        setUser({
          username: userData.username,
          energy: userData.energy,
          coins: userData.coins,
          tasks: userData.tasks,
          telegramId: userData.telegramId,
        });
        setUserTasks(userData.tasks);
      } catch (error) {
        console.error("Error fetching user tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    if (telegramId) {
      fetchUserTasks();
    }
  }, [telegramId]);

  return (
    <UserContext.Provider value={{ user, userTasks, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextProps => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
