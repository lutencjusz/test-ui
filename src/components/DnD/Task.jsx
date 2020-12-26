/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) =>
    props.isDragDisabled ? 'white' : props.isDragging ? 'lightgreen' : 'white'};
  border: 1px solid
    ${(props) => (props.isDragDisabled ? 'cadetblue' : 'lightgrey')};
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
            innerRef={provided.innerRef}
            isDragging={snapshot.isDragging}
            isDragDisabled={isDragDisabled}
            onClick={() =>
              this.props.setCategory(this.props.task.setCategoryElements)
            }
          >
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}
