import React, { FC } from "react";
import { ReactNode } from "react";
import { Draggable, DraggableProps } from "react-beautiful-dnd";

interface PropType extends Omit<DraggableProps, "children"> {
  children: ReactNode;
}

export default function DragComponent({ children, ...props }: PropType) {
  if (!React.isValidElement(children)) return <div />;
  return (
    <Draggable {...props}>
      {(provided) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
          >
            {children}
          </div>
        );
      }}
    </Draggable>
  );
}
