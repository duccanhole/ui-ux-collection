import { Container } from "@nextui-org/react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import TaskComponent from "../../components/to-do-app/task";
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
    taskName: "one",
    id: 1,
    labelColor: "",
  },
];

export default function ToDoAppPage() {
  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
  };
  return (
    <main className="bg-pink-200 h-screen">
      <Container className="mt-5">
        <DragDropContext onDragEnd={onDragEnd}>
          {/* <Droppable droppableId="0" type="COLUMN" direction="vertical">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {task.map((item, index) => (
                <TaskComponent key={index} dragId={index} content={item} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable> */}
          <TaskBox title="Completed" taskList={mockData} boxId={0} />
        </DragDropContext>
      </Container>
    </main>
  );
}
