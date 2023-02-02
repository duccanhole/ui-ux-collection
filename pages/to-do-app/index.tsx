import { Container } from "@nextui-org/react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import DragComponent from "../../components/to-do-app/drag-component";
import DropComponent from "../../components/to-do-app/drop-component";
import TaskBox from "../../components/to-do-app/task-box";
import { ITask } from "../../mock-data/todo/task";

const task = ["one", "two", "three"];
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

export default function ToDoAppPage() {
  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    console.log(result);
  };
  return (
    <main className="bg-pink-200 h-screen">
      <Container className="mt-5">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid sm:grid-cols-3 gap-3 grid-cols-1">
            {boxTasks.map((item, index) => (
              <DropComponent key={index} droppableId={"drop-" + index}>
                <TaskBox
                  title={item.title}
                  taskList={item.taskList}
                  boxId={index}
                />
              </DropComponent>
            ))}
          </div>
        </DragDropContext>
      </Container>
    </main>
  );
}
