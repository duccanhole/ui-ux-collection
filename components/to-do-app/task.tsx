import { Draggable, DraggableProps } from "react-beautiful-dnd";

interface PropType {
  content?: string;
  dragId: number;
}

const TaskComponent: React.FC<PropType> = ({ content, dragId }: PropType) => {
  return (
    <Draggable draggableId={"task-" + dragId} index={dragId}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="border-2 broder-gray-300"
        >
          {content}
        </div>
      )}
    </Draggable>
  );
};
export default TaskComponent;
