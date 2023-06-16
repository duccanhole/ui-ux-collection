import { ITask } from "../../mock-data/todo/task";
import { CgMoreAlt } from "react-icons/cg";
import { Dropdown } from "@nextui-org/react";
import React, { useMemo } from "react";

interface PropType {
  task: ITask;
  boxId: string | number;
  onTaskUpdate: (action: string, boxId: string | number, task: ITask) => any;
}

const TaskComponent = ({ task, boxId, onTaskUpdate }: PropType) => {
  const dropItems = useMemo(() => {
    if (boxId === 0) return ["Move to Completed", "Move to Doing", "Remove"];
    else if (boxId === 1)
      return ["Move to Plan", "Move to Completed", "Remove"];
    return ["Move to Plan", "Move to Doing", "Remove"];
  }, [boxId]);
  return (
    <div className="bg-white mx-2 my-2 p-2 rounded-lg shadow flex">
      <div className="grow">{task.taskName}</div>
      <div>
        <Dropdown>
          <Dropdown.Trigger>
            <button>
              <CgMoreAlt />
            </button>
          </Dropdown.Trigger>
          <Dropdown.Menu>
            {dropItems.map((item, index) => (
              <Dropdown.Item
                key={index}
                color={item === "Remove" ? "error" : "default"}
              >
                <div onClick={() => onTaskUpdate(item, boxId, task)}>
                  {item}
                </div>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};
export default TaskComponent;
