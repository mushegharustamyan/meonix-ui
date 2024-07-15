import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Menu } from "./Menu";

interface User {
  username: string;
}

const WelcomePage: React.FC = () => {
  const { telegramId } = useParams<{ telegramId: string }>();
  const [user, setUser] = useState<User | null>(null);

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
      }
    };

    if (telegramId) {
      fetchUser();
    }
  }, [telegramId]);

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col  h-screen bg-gray-100">
      <Menu />
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.username}!</h1>
    </div>
  );
};

export default WelcomePage;
