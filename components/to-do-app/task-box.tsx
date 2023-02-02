import { ITask } from "../../mock-data/todo/task";
import DragComponent from "./drag-component";
import DropComponent from "./drop-component";

interface PropType {
  title: string;
  taskList: ITask[];
  boxId: number;
}

export default function TaskBox({ title, boxId, taskList }: PropType) {
  return (
    <div className="border-2 border-gray-300">
      <h3>{title}</h3>
      <DropComponent droppableId={"taskbox-" + boxId}>
        {taskList.map((item, index) => {
          return (
            <DragComponent
              draggableId={"box-" + boxId + "-task" + index}
              index={index}
              key={index}
            >
              <div>{item.taskName}</div>
            </DragComponent>
          );
        })}
      </DropComponent>
    </div>
  );
}
