import React, { useState } from 'react';
import initialData from './initial-data';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Column from './Column';
//import _ from 'lodash';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function DnD() {
  const [stateEl, setStateEl] = useState(initialData);
  const [dragId, setDragId] = useState(); // służy do przenoszenia informacji, który element został podniesiony

  const setCategory = (category) => {
    if (category === undefined) return;
    const newState = {
      ...stateEl,
      categoryFilter: category,
    };
    setStateEl(newState);
  };

  const onBeforeCapture = (beforeCapture) => {
    setDragId(beforeCapture.draggableId);
  };

  const deleteTask = (taskId) => {
    const newDeletedTaskIdsArray = Object.values({
      ...stateEl.columns['column-3'].taskIds,
    });
    const newDeletedTaskIdsArrayId = newDeletedTaskIdsArray.indexOf(taskId);
    newDeletedTaskIdsArray.splice(newDeletedTaskIdsArrayId, 1);

    let newAddTaskIdsArray = Object.values({
      ...stateEl.columns['column-2'].taskIds,
    });
    newAddTaskIdsArray.splice(0, 0, taskId);
    newAddTaskIdsArray.sort();

    const newState = {
      ...stateEl,
      columns: {
        ...stateEl.columns,
        ['column-2']: {
          ...stateEl.columns['column-2'],
          taskIds: newAddTaskIdsArray,
        },
        ['column-3']: {
          ...stateEl.columns['column-3'],
          taskIds: newDeletedTaskIdsArray,
        },
      },
    };
    setStateEl(newState);
  };

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
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    //startTaskIds.splice(source.index, 1);
    startTaskIds.splice(startTaskIds.indexOf(dragId), 1); // ustawia prawidłowy index, bo filtr powoduje, że niektóre są niewidoczne
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    console.log({ source });

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    console.log({ destination });

    const newState = {
      ...stateEl,
      columns: {
        ...stateEl.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    console.log(newState.columns);
    setStateEl(newState);
  };

  return (
    <div className="frame">
      <h1>Drag and Drop</h1>
      <DragDropContext onDragEnd={onDragEnd} onBeforeCapture={onBeforeCapture}>
        <Container>
          {stateEl.columnOrder.map((columnId) => {
            const column = stateEl.columns[columnId];
            const tasks = column.taskIds.map((taskId) => stateEl.tasks[taskId]);
            return (
              <Column
                key={column.id}
                column={column}
                tasks={tasks}
                message={stateEl.columns['column-3'].taskIds}
                categoryFilter={stateEl.categoryFilter}
                setCategory={setCategory}
                deleteTask={deleteTask}
              />
            );
          })}
        </Container>
      </DragDropContext>
    </div>
  );
}
