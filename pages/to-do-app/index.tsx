import { Container, Input } from "@nextui-org/react";
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
  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (destination === null || destination === undefined) return;
    const newData = data;
    const desId = parseInt(destination.droppableId),
      desIndex = destination.index;
    const sourceId = parseInt(source.droppableId),
      sourceIndex = source.index;
    const desArr = data[desId].taskList,
      sourceArr = data[sourceId].taskList;
    // if drag - drog in a box, swap it
    if (desId === sourceId) {
      if (desIndex === sourceIndex) return;
      else {
        const tmpItem = data[desId].taskList[desIndex];
        newData[desId].taskList[desIndex] =
          newData[sourceId].taskList[sourceIndex];
        newData[sourceId].taskList[sourceIndex] = tmpItem;
      }
    } else {
      // add item to destination
      newData[desId].taskList = insertTask(
        desIndex,
        sourceArr[sourceIndex],
        desArr
      );
      // and remove that item in source
      newData[sourceId].taskList = removeTask(sourceIndex, sourceArr);
    }
    console.log(newData);
    setData([...newData]);
  };
  // waiting for all DOM loading done
  useEffect(() => {
    setDOMLoader(true);
  }, []);
  return (
    <main className="bg-pink-200 h-screen">
      <Container className="mt-5">
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
  );
}
