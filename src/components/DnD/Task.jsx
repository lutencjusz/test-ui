import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) =>
    props.isDragDisabled
      ? 'white'
      : props.isDragging
      ? 'lightgreen'
      : props.isAttributesEnteredIn &&
        (props.columnId.includes('column-3') ||
          props.columnId.includes('column-2'))
      ? 'lightblue'
      : 'white'};
  border: 1px solid
    ${(props) => (props.isDragDisabled ? 'cadetblue' : 'lightgrey')};
  display: flex;
  justify-content: space-between;
`;

const Handle = styled.div`
  width: 20px;
  height: 20px;
  right: 8px;
  background-color: red;
  border-radius: 4px;
  margin-right: 8px;
  font-size: 12px;
  color: white;
  cursor: pointer;
  z-index: 1;
`;

export default class Task extends React.Component {
  render() {
    const isDragDisabled = this.props.task.isDragDisabled === true;
    return (
      <Draggable
        draggableId={this.props.task.id}
        index={this.props.index}
        isDragDisabled={isDragDisabled}
      >
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            isDragDisabled={isDragDisabled}
            isAttributesEnteredIn={this.props.task.isAttributesEnteredIn}
            columnId={this.props.columnId}
            onClick={() =>
              this.props.setCategory(
                this.props.task.setCategoryElements,
                this.props.task.id,
                this.props.columnId
              )
            }
          >
            {this.props.task.content}
            {this.props.availableDelete ? (
              <Handle onClick={() => this.props.deleteTask(this.props.task.id)}>
                <FontAwesomeIcon icon={faTimes} />
              </Handle>
            ) : null}
          </Container>
        )}
      </Draggable>
    );
  }
}
