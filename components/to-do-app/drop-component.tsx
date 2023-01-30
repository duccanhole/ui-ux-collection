import { ReactNode } from "react";
import { Droppable, DroppableProps } from "react-beautiful-dnd";

interface PropType extends Omit<DroppableProps, "children"> {
  children: ReactNode;
}

export default function DropComponent({ children, ...props }: PropType) {
  return (
    <Droppable {...props}>
      {(provided, snapshot) => {
        return (
          <div {...provided.innerRef} ref={provided.innerRef}>
            {children}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
}
