import { ITask } from "../../mock-data/todo/task";
import DragComponent from "./drag-component";
import DropComponent from "./drop-component";
import TaskComponent from "./task";
import { CgPen } from "react-icons/cg";
import { useEffect, useRef, useState } from "react";

interface PropType {
  title: string;
  taskList: ITask[];
  boxId: number;
}

export default function TaskBox({ title, boxId, taskList }: PropType) {
  const [color, setColor] = useState("white");
  useEffect(() => {
    if (title === "Plan") setColor("#fcd34d");
    else if (title === "Doing") setColor("#60a5fa");
    else setColor("#10b981");
  }, []);
  return (
    <div
      className={`border-4 bg-gray-100 rounded-lg shadow-xl`}
      style={{ borderColor: color }}
    >
      <div
        className="p-2 text-xl font-medium flex"
        style={{ backgroundColor: color }}
      >
        <div className="grow">
          {title}: {taskList.length}
        </div>
        <div className="text-base">
          <button className="inline">
            <CgPen shapeRendering={26} />
          </button>
        </div>
      </div>
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
