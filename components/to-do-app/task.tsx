import { ITask } from "../../mock-data/todo/task";
import { CgMoreAlt } from "react-icons/cg";

interface PropType {
  task: ITask;
  boxId: string | number;
}

const TaskComponent = ({ task, boxId }: PropType) => {
  return (
    <div className="bg-white mx-2 my-2 p-2 rounded-lg shadow flex">
      <div className="grow">{task.taskName}</div>
      <div>
        <button>
          <CgMoreAlt />
        </button>
      </div>
    </div>
  );
};
export default TaskComponent;
