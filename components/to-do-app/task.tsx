import { Card, Text } from "@nextui-org/react";
import { Draggable, DraggableProps } from "react-beautiful-dnd";
import { ITask } from "../../mock-data/todo/task";

interface PropType {
  task: ITask;
  boxId: string | number;
}

const TaskComponent: React.FC<PropType> = ({ task, boxId }: PropType) => {
  return (
    <Card className="my-2">
      <Card.Body>
        <Text>{task.taskName}</Text>
      </Card.Body>
    </Card>
  );
};
export default TaskComponent;
