import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface User {
  username: string;
}

interface UserContextProps {
  user: User | null;
  loading: boolean;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { telegramId } = useParams<{ telegramId: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/graphql",
          {
            query: `
              query GetUser($telegramId: String!) {
                user(telegramId: $telegramId) {
                  username
                }
              }
            `,
            variables: {
              telegramId,
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        setUser(response.data.data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (telegramId) {
      fetchUser();
    }
  }, [telegramId]);

  return (
    <UserContext.Provider value={{ user, loading }}>
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
