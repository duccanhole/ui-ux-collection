import { ITask } from "../../mock-data/todo/task";
import DragComponent from "./drag-component";
import DropComponent from "./drop-component";
import TaskComponent from "./task";

interface PropType {
  title: string;
  taskList: ITask[];
  boxId: number;
}

export default function TaskBox({ title, boxId, taskList }: PropType) {
  return (
    <div className="border-2 border-gray-300 bg-white/70 rounded-lg shadow-xl">
      <h3 className="bg-gray-300 p-2 text-xl font-medium">{title}</h3>
      <DropComponent
        droppableId={boxId.toString()}
        type="task"
        direction="vertical"
      >
        {taskList.map((item, index) => {
          return (
            // key of drag-component must be unique
            <DragComponent
              draggableId={item.id.toString()}
              index={index}
              key={item.id.toString()}
            >
              <TaskComponent task={item} boxId={boxId} />
            </DragComponent>
          );
        })}
      </DropComponent>
    </div>
  );
}
