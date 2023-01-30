import { ReactHTMLElement } from "react";
import { ITask } from "../../mock-data/todo/task";
import DragComponent from "./drag-component";
import DropComponent from "./drop-component";
import TaskComponent from "./task";

interface PropType {
  title: "To do" | "Doing" | "Completed";
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
            >
              <div>{item.taskName}</div>
            </DragComponent>
          );
        })}
      </DropComponent>
    </div>
  );
}
