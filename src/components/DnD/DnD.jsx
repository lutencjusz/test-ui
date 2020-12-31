import React, { useState } from 'react';
import initialData from './initial-data';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Column from './Column';
import FormAttributes from './FormAttributes';
import { toaster } from 'evergreen-ui';
//import _ from 'lodash';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function DnD() {
  const [stateEl, setStateEl] = useState(initialData);
  const [dragId, setDragId] = useState(undefined); // służy do przenoszenia informacji, który element został podniesiony
  const [formState, setFormState] = useState({ state: false, taskId: null });

  const submitAttributes = (taskId, data) => {
    console.log({ data });
    setFormState({ state: false, taskId: null });
    toaster.success('Atrybuty uzupełnione', {
      description: `${{ data }}`,
      duration: 3,
      id: 'forbidden-action',
    });
  };

  const setCategory = (setCategoryElements, taskId, columnId) => {
    console.log(
      `Uruchomiony setCategory ${setCategoryElements} ${taskId} ${columnId}`
    );
    if (setCategoryElements === undefined) {
      if (columnId.includes('column-3')) {
        setFormState({
          state: true,
          taskId,
        });
        return;
      }
    } else if (columnId.includes('column-1')) {
      const newState = {
        ...stateEl,
        categoryFilter: setCategoryElements,
      };
      setStateEl(newState);
    }

    setFormState({
      ...formState,
      state: false,
    });
  };

  const onBeforeCapture = (beforeCapture) => {
    setDragId(beforeCapture.draggableId);
    setFormState({
      ...formState,
      state: false,
    });
  };

  const deleteTask = (taskId) => {
    console.log('Uruchomiony deleteTask');
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
    setFormState({
      ...formState,
      state: false,
    });
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
    setFormState({
      state: true,
      taskId: dragId,
    });
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
      {formState.state ? (
        <FormAttributes
          formState={formState}
          attributes={stateEl.attributes}
          submitAttributes={submitAttributes}
        />
      ) : (
        ''
      )}
    </div>
  );
}
