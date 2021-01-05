import React, { useState } from 'react';
import SchemaForm from '@rsuite/schema-form';
import {
  InputNumber,
  Schema,
  Button,
  ButtonToolbar,
  Notification,
} from 'rsuite';
import styled from 'styled-components';

const Container = styled.div`
  text-align: left;
  margin-left: 20%;
  width: 80%;
`;

const { StringType, NumberType } = Schema.Types;
const Form = SchemaForm([
  {
    key: 'username',
    type: StringType().isRequired('To pole jest wymagane'),
    label: 'Imię',
  },
  {
    key: 'lastName',
    type: StringType().isRequired('To pole jest wymagane'),
    label: 'Nazwisko',
  },
  {
    key: 'group',
    type: NumberType().isOneOf([5, 10, 15], 'Może być jeden z `5`, `10`, `15`'),
    label: 'Grupa',
    helpBlock: 'wybierz jedną z 5, 10, 15...',
  },
  {
    key: 'email',
    type: StringType().isEmail('Wprowadź ważny email'),
    label: 'Email',
  },
  {
    key: 'age',
    type: NumberType('Please enter a valid number'),
    label: 'Age',
    componentClass: InputNumber,
    componentProps: {
      autoComplete: 'off',
    },
  },
]);

export default function SignInButton() {
  const [dataForm, setDataForm] = useState('');
  const [completedForm, setCompletedForm] = useState(false);

  const handleSubmit = (funcName) => {
    console.log(dataForm);
    Notification[funcName]({
      title: funcName,
      description: `Imię: ${dataForm.username.toString() || ''}, Nazwisko: ${
        dataForm.lastName.toString() || ''
      },  Wiek: ${dataForm.age.toString() || ''}, email: ${
        dataForm.email.toString() || ''
      }`,
    });
  };

  const handleChange = (data) => {
    setDataForm(data);
    setCompletedForm(
      data.email && data.age && data.username && data.lastName && data.group
    );
  };

  return (
    <div className="frame">
      <h1>Rsuite</h1>
      <h6>z wykorzystaniem SchemaForm</h6>
      <Container>
        <Form onChange={(data) => handleChange(data)} />
        <br />
        <ButtonToolbar>
          <Button
            appearance="primary"
            disabled={!completedForm}
            onClick={() => handleSubmit('success')}
          >
            Zatwierdź
          </Button>
        </ButtonToolbar>
      </Container>
    </div>
  );
}
