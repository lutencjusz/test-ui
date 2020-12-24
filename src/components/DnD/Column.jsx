import React from "react";
import styled from "styled-components";
import Task from "./Task.jsx";
import { Droppable } from "react-beautiful-dnd";
import { Button } from "shards-react";
import { toaster } from "evergreen-ui";

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
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "white")}
  flex-grow: 1;
  min-height: 100px;
`;

const ButtonStyle = styled.div`
  margin: 10px;
`;

export default class Column extends React.Component {
  sendFinal(message) {
    toaster.success("Wysłano konfigurację...", {
      description: message,
      duration: 3,
      id: "forbidden-action",
    });
  }

  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id} type="TASK">
          {(provided, snapshot) => (
            <TaskList
              innerRef={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
        {this.props.column.id === "column-3" ? (
          <ButtonStyle>
            <Button block onClick={() => this.sendFinal(this.props.message)}>
              Wyślij
            </Button>
          </ButtonStyle>
        ) : null}
      </Container>
    );
  }
}
