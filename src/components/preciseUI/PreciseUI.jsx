import React from 'react';
import { Button, Form, TextField, PasswordField } from 'precise-ui';
import Is from 'is_js';
import styled from 'styled-components';

const Container = styled.div`
  text-align: left;
  margin-left: 10%;
  width: 80%;
`;

export default function PreciseUI() {
  return (
    <div className="frame">
      <h1>Precise UI</h1>
      <br />
      <Form
        onSubmit={(e) => alert(JSON.stringify(e))}
        validationRules={{
          firstName: (value) =>
            value && value.length < 3 ? 'Co najmniej 3 znaki' : undefined,
          lastName: (value) =>
            value && value.length < 3 ? 'Co najmniej 3 znaki' : undefined,
          email: (value) =>
            value && !Is.email(value) ? 'Niepoprawny format email' : undefined,
          password: (value) =>
            value && value !== '1234'
              ? 'Niewłaściwe hasło, spróbuj jeszcze raz'
              : undefined,
        }}
      >
        <Container>
          <div>
            <TextField name="firstName" label="Imię" />
          </div>
          <br />
          <div>
            <TextField name="lastName" label="Nazwisko" />
          </div>
          <br />
          <div>
            <TextField name="email" label="Email" />
          </div>
          <br />
          <div>
            <PasswordField name="password" label="Hasło" />
          </div>
          <br />
          <div>
            <Button className="maxButton" type="submit">
              Zapisz
            </Button>
            <Button className="maxButton" type="reset">
              Usuń
            </Button>
          </div>
        </Container>
      </Form>
    </div>
  );
}
