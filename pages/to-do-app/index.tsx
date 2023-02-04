import { Container } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import DropComponent from "../../components/to-do-app/drop-component";
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
  return arr.splice(index, 0, item);
}

function removeTask(index: number, arr: []) {
  return arr.slice(index, 1);
}

export default function ToDoAppPage() {
  const [DOMLoader, setDOMLoader] = useState(false);
  const [data, setData] = useState(boxTasks);
  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) return;
    let newData = data;
    newData[1].taskList = insertTask(
      source.index,
      newData[0].taskList[source.index],
      newData[1].taskList
    );
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
