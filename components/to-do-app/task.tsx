import { Card, Text } from "@nextui-org/react";
import { useState } from "react";
import { ITask } from "../../mock-data/todo/task";

interface PropType {
  task: ITask;
  boxId: string | number;
}

const TaskComponent = ({ task, boxId }: PropType) => {
  return (
    <div className="bg-white mx-2 my-2 p-2 rounded-lg shadow">{task.taskName}</div>
  );
};
export default TaskComponent;
