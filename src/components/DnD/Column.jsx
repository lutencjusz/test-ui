import React, { Fragment } from 'react';
import styled from 'styled-components';
import Task from './Task.jsx';
import { Droppable } from 'react-beautiful-dnd';
//import Button from '@material-ui/core/Button';
import { toaster } from 'evergreen-ui';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;
  cursor: context-menu;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.isDraggingOver ? 'skyblue' : 'white')}
  flex-grow: 1;
  min-height: 100px;
`;

const ButtonStyle = styled.div`
  margin: 10px;
`;

export default class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = { statusButtonSendDisabled: true };
  }

  sendFinal(message) {
    console.log(this.state.statusButtonSendDisabled);
    toaster.success('Wysłano konfigurację...', {
      description: message,
      duration: 3,
      id: 'forbidden-action',
    });
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (!prevState.statusButtonSendDisabled)
      this.setState({ statusButtonSendDisabled: true });
  }

  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable
          droppableId={this.props.column.id}
          isDropDisabled={this.props.column.isDropDisabled}
          type="TASK"
        >
          {(provided, snapshot) => (
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.tasks
                .filter(
                  (task) =>
                    this.props.column.id.includes('column-1') ||
                    this.props.column.id.includes('column-3') ||
                    task.category.includes('*') ||
                    task.category.includes(this.props.categoryFilter)
                )
                .map((task, index) => (
                  <Fragment key={task.id}>
                    {this.props.column.id.includes('column-3') &&
                    this.state.statusButtonSendDisabled &&
                    task.isAttributesEnteredIn
                      ? this.setState({ statusButtonSendDisabled: false })
                      : null}
                    <Task
                      task={task}
                      index={index}
                      columnId={this.props.column.id}
                      setCategory={this.props.setCategory}
                      setCategoryElements={task.setCategoryElements}
                      availableDelete={
                        this.props.column.id.includes('column-3') ? true : false
                      }
                      deleteTask={this.props.deleteTask}
                      submitAttributes={this.props.submitAttributes}
                    />
                  </Fragment>
                ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
        {this.props.column.id === 'column-3' ? (
          <ButtonStyle>
            <button
              className="btn btn-primary mb-4"
              disabled={this.state.statusButtonSendDisabled}
              onClick={() => this.sendFinal(this.props.message)}
            >
              Zatwierdź
            </button>
          </ButtonStyle>
        ) : null}
      </Container>
    );
  }
}
