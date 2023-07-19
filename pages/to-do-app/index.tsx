import { Container } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import TaskBox from "../../components/to-do-app/task-box";
import { ITask } from "../../mock-data/todo/task";

const mockData: ITask[] = [
  {
    taskName: "one",
    id: 0,
  },
  {
    taskName: "two",
    id: 1,
  },
  {
    taskName: "three",
    id: 2,
  },
];
const boxTasks = [
  { title: "Plan", taskList: mockData },
  {
    title: "Doing",
    taskList: [],
  },
  {
    title: "Completed",
    taskList: [],
  },
];

function insertTask(index: number, item: any, arr: any[]) {
  arr.splice(index, 0, item);
  return arr;
}

function removeTask(index: number, arr: any[]) {
  arr.splice(index, 1);
  return arr;
}

export default function ToDoAppPage() {
  const [DOMLoader, setDOMLoader] = useState(false);
  const [data, setData] = useState(boxTasks);
  const [taskName, setTaskName] = useState("");
  // logic handle when user finish drag event
  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) return;
    // deep clone
    const newData = JSON.parse(JSON.stringify(data));
    const desId = parseInt(destination.droppableId),
      desIndex = destination.index;
    const sourceId = parseInt(source.droppableId),
      sourceIndex = source.index;
    const desArr = data[desId].taskList,
      sourceArr = data[sourceId].taskList;
    // if user drag-drop component to same postision, do nothing
    if (desId === sourceId && desIndex === sourceIndex) return;
    const item = sourceArr[sourceIndex];
    // first, remove that item in source
    newData[sourceId].taskList = removeTask(sourceIndex, sourceArr);
    // then, add item to destination
    newData[desId].taskList = insertTask(desIndex, item, desArr);
    setData(newData);
  };
  // handle menu action
  const updateTask = (action: string, boxId: number, task: ITask) => {
    const newData = JSON.parse(JSON.stringify(data));
    let desIndex = 0,
      sourceIndex = 0;
    switch (action) {
      case "Move to Plan":
        desIndex = 0;
        break;
      case "Move to Doing":
        desIndex = 1;
        break;
      case "Move to Completed":
        desIndex = 2;
        break;
      default:
    }
    sourceIndex = newData[boxId].taskList.findIndex(
      (el: ITask) => el.id === task.id
    );
    if (action !== "Remove") newData[desIndex].taskList.push(task);
    newData[boxId].taskList.splice(sourceIndex, 1);
    setData(newData);
  };
  const createTask = () => {
    if (taskName.trim() === "") return;
    const newData = JSON.parse(JSON.stringify(data));
    let total = 0;
    newData.forEach((el: { title: String; taskList: any[] }) => {
      total += el.taskList.length;
    });
    newData[0].taskList.push({
      taskName,
      id: total,
    });
    setTaskName("");
    setData(newData);
  };
  // waiting for all DOM loading done
  useEffect(() => {
    setDOMLoader(true);
  }, []);
  return (
    <>
      <main className="bg-pink-200 h-screen">
        <Container className="p-5">
          <div className="py-4 flex">
            <input
              className="py-2 pl-2 rounded-lg w-75 shadow-lg text-white"
              value={taskName}
              onChange={(e) => {
                setTaskName(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") createTask();
              }}
            ></input>
            <button
              className="mx-4 bg-black/80 text-white/80 rounded-lg p-2 active:scale-90 shadow-lg"
              onClick={createTask}
            >
              create plan
            </button>
          </div>
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid sm:grid-cols-3 gap-3 grid-cols-1">
              {DOMLoader
                ? data.map((item, index) => (
                    <TaskBox
                      key={index}
                      title={item.title}
                      taskList={item.taskList}
                      boxId={index}
                      onTaskUpdate={updateTask}
                    />
                  ))
                : null}
            </div>
          </DragDropContext>
        </Container>
      </main>
    </>
  );
}
