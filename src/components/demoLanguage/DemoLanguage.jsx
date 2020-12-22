/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import initialData from "./initial-data";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const reorder = (list, fromIndex, toIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(fromIndex, 1);
  result.splice(toIndex, 0, removed);
  return result;
};

export default function DemoLanguage() {
  console.log({ initialData });
  const [words, setWords] = useState(initialData);

  function onDragEnd(result) {
    if (!result.destination) return;

    const fromIndex = result.source.index;
    const toIndex = result.destination.index;

    if (fromIndex === toIndex) return;

    const newWords = {
      elements: { ...words.elements },
      elementsOrder: reorder(words.elementsOrder, fromIndex, toIndex),
    };
    setWords(newWords);
  }
  return (
    <div className="frame">
      <h1>react-beautiful-dnd</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {words.elementsOrder.map((key, index) => (
                <Draggable key={key} draggableId={key} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {words.elements[key].name}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
