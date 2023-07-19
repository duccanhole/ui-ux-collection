import { ITask } from "../../mock-data/todo/task";
import DragComponent from "./drag-component";
import DropComponent from "./drop-component";
import TaskComponent from "./task";
import { CgPen } from "react-icons/cg";
import { useEffect, useState } from "react";
import { Dropdown } from "@nextui-org/react";

interface PropType {
  title: string;
  taskList: ITask[];
  boxId: number;
  onTaskUpdate(action: string, boxId: string | number, task: ITask): any;
}

const colors = [
  { name: "gray", value: "#9ca3af" },
  { name: "red", value: "#f87171" },
  { name: "orange", value: "#fb923c" },
  { name: "yellow", value: "#fcd34d" },
  { name: "blue", value: "#60a5fa" },
  { name: "green", value: "#10b981" },
  { name: "teal", value: "#14b8a6" },
  { name: "indigo", value: "#818cf8" },
  { name: "violet", value: "#a78bfa" },
  { name: "purple", value: "#c084fc" },
];

export default function TaskBox({
  title,
  boxId,
  taskList,
  onTaskUpdate,
}: PropType) {
  const [color, setColor] = useState("white");
  useEffect(() => {
    if (title === "Plan") setColor("#fcd34d");
    else if (title === "Doing") setColor("#60a5fa");
    else setColor("#10b981");
  }, []);
  return (
    <div
      className={`border-4 bg-gray-200 rounded-lg shadow-xl`}
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
          <Dropdown>
            <Dropdown.Trigger>
              <button className="inline">
                <CgPen shapeRendering={26} />
              </button>
            </Dropdown.Trigger>
            <Dropdown.Menu>
              {colors.map((item, index) => (
                <Dropdown.Item key={index}>
                  <div
                    className="flex cursor-pointer"
                    onClick={() => {
                      setColor(item.value);
                    }}
                  >
                    <div
                      className="rounded-lg my-auto w-4 h-4"
                      style={{ backgroundColor: item.value }}
                    ></div>
                    <div className="grow text-center">{item.name}</div>
                  </div>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <DropComponent
        droppableId={boxId.toString()}
        type="task"
        direction="vertical"
        isDropDisabled={false}
      >
        {taskList.map((item, index) => {
          return (
            // key of drag-component must be unique
            <DragComponent
              draggableId={item.id.toString()}
              index={index}
              key={item.id.toString()}
            >
              <TaskComponent
                task={item}
                boxId={boxId}
                onTaskUpdate={onTaskUpdate}
              />
            </DragComponent>
          );
        })}
      </DropComponent>
    </div>
  );
}
