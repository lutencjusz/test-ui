/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import initialData from "./initial-data";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import Column from "./Column";

const Container = styled.div`
  display: flex;
`;

const reorder = (list, fromIndex, toIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(fromIndex, 1);
  result.splice(toIndex, 0, removed);
  return result;
};

export default function DnD() {
  const [stateEl, setStateEl] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = stateEl.columns[source.droppableId];
    const finish = stateEl.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...stateEl,
        columns: {
          ...stateEl.columns,
          [newColumn.id]: newColumn,
        },
      };

      setStateEl(newState);
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...stateEl,
      columns: {
        ...stateEl.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setStateEl(newState);
  };
  const onDragStart = (start, provided) => {
    console.log({ start });
  };

  const onDragUpdate = (update, provided) => {
    console.log({ update });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {stateEl.columnOrder.map((columnId) => {
          const column = stateEl.columns[columnId];
          const tasks = column.taskIds.map((taskId) => stateEl.tasks[taskId]);

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </Container>
    </DragDropContext>
  );
}
