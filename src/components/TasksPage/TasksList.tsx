import React from "react";
import Button from "../shared/Button";
import Typography from "../shared/Typography";
import Icon from "../shared/Icon";
import InstagramVector from "../../assets/Instagram_Vector.png";
import CheckMarkVector from "../../assets/CheckMark_Vector.png";
import ArrowRight from "../../assets/ArrowRight_Vector.png";
import { TaskInterface, TaskTypeEnum } from "../../context/user/UserContext";

interface TasksListProps {
  userTasks: TaskInterface[] | null;
  taskType: TaskTypeEnum;
}

const isTaskIncomplete = (status: string): boolean => {
  return status === "INCOMPLETE";
};

export const TasksList: React.FC<TasksListProps> = ({
  userTasks,
  taskType,
}) => {
  return (
    <div className="w-full flex flex-col gap-3">
      {userTasks
        ?.filter((task) => task.type === taskType)
        .map((task) => (
          <div className="w-full flex flex-row justify-start bg-[#111214] rounded-[8px]">
            <div className="w-5/6 flex flex-row">
              <Button
                buttonText={
                  <div className="w-full flex flex-col items-start justify-start">
                    <Typography
                      color="#D8F3E3"
                      fontSize="14px"
                      fontWeight="500"
                      lineHeight="20px"
                      customStyle={{ textAlign: "center" }}
                    >
                      {task.title}
                    </Typography>
                    <Typography
                      color="#D8F3E3BD"
                      fontSize="12px"
                      fontWeight="500"
                      lineHeight="18px"
                      customStyle={{ textAlign: "center" }}
                    >
                      + 10.000 MP
                    </Typography>
                  </div>
                }
                justifyContent="justify-start"
                textColor="#D8F3E3"
                padding="px-4 py-2"
                borderSize="border-2"
                width="w-full"
                icon={
                  <Icon
                    src={InstagramVector}
                    alt="Rocket Icon"
                    width="24px"
                    height="24px"
                    containerWidth="24px"
                    containerHeight="24px"
                    iconPosition="center"
                  />
                }
                iconPosition="left"
              />
            </div>

            <div className="w-1/6 flex flex-row justify-center items-center">
              <Icon
                src={
                  isTaskIncomplete(task.status) ? ArrowRight : CheckMarkVector
                }
                alt="Rocket Icon"
                width={isTaskIncomplete(task.status) ? "24px" : "9px"}
                height={isTaskIncomplete(task.status) ? "24px" : "9px"}
                containerWidth="24px"
                containerHeight="24px"
                iconPosition="center"
              />
            </div>
          </div>
        ))}
    </div>
  );
};
