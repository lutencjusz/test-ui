import React from 'react';

export default function FormAttributes(props) {
  const { taskId } = props.formState;
  const attr = props.attributes;
  console.log({ taskId });
  console.log(attr[taskId][0]);
  return <h1>Formularz Atrybutów {taskId}</h1>;
}
