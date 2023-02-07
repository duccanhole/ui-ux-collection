import { Card, Text } from "@nextui-org/react";
import { ITask } from "../../mock-data/todo/task";

interface PropType {
  task: ITask;
  boxId: string | number;
}

const TaskComponent = ({ task, boxId }: PropType) => {
  return (
    <Card variant="flat" className="my-2">
      <Card.Body>
        <Text>{task.taskName}</Text>
      </Card.Body>
    </Card>
  );
};
export default TaskComponent;
