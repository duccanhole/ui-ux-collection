import { Container } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import TaskBox from "../../components/to-do-app/task-box";
import { ITask } from "../../mock-data/todo/task";

const mockData: ITask[] = [
  {
    taskName: "one",
    id: 0,
    labelColor: "",
  },
  {
    taskName: "two",
    id: 1,
    labelColor: "",
  },
  {
    taskName: "three",
    id: 3,
    labelColor: "",
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
  // waiting for all DOM loading done
  useEffect(() => {
    setDOMLoader(true);
  }, []);
  return (
    <>
      <main className="bg-pink-200 h-screen">
        <Container className="pt-5">
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid sm:grid-cols-3 gap-3 grid-cols-1">
              {DOMLoader
                ? data.map((item, index) => (
                    <TaskBox
                      key={index}
                      title={item.title}
                      taskList={item.taskList}
                      boxId={index}
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
