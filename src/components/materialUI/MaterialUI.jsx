import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Is from 'is_js';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MaterialUI() {
  const classes = useStyles();

  const [emailError, setEmailError] = useState(true);
  const [firstNameError, setFirstNameError] = useState(true);
  const [submitButtonDisable, setSubmitButtonDisable] = useState(true);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
  };

  const [email, setEmail] = useState(initialValues.email);
  const [firstName, setFirstName] = useState(initialValues.firstName);
  const [lastName, setLastName] = useState(initialValues.lastName);

  useEffect(() => {
    setSubmitButtonDisable(emailError || firstNameError);
  }, [emailError, firstNameError]);

  useEffect(() => {
    setFirstNameError(Is.empty(firstName.trim()));
  }, [firstName]);

  useEffect(() => {
    setEmailError(!Is.email(email));
  }, [email]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // setEmailError(event.target.value && !Is.email(event.target.value));
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    //setFirstNameError(Is.empty(event.target.value.trim()));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Imię: ${firstName}, Nazwisko: ${lastName}, email: ${event.target[2].value}`
    );
  };

  const clearForm = () => {
    setEmail(initialValues.email);
    setFirstName(initialValues.firstName);
    setLastName(initialValues.lastName);
    setFirstNameError(true);
    setEmailError(true);
  };

  return (
    <div className="frame">
      <h1>Material UI</h1>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e)}
      >
        <TextField
          id="firstName"
          label="Imię"
          color="primary"
          required={true}
          value={firstName}
          onInput={(e) => handleFirstNameChange(e)}
          error={firstNameError}
        />
        <TextField
          id="lastName"
          label="Nazwisko"
          color="primary"
          placeholder="Wprowadź nazwisko"
          value={lastName}
          onInput={(e) => setLastName(e.target.value)}
        />
        <TextField
          id="email"
          label="Email"
          color="primary"
          error={emailError}
          value={email}
          onInput={(e) => handleEmailChange(e)}
          required={true}
        />
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          disabled={submitButtonDisable}
        >
          Zatwierdź
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={(e) => clearForm(e)}
        >
          Usuń
        </Button>
      </form>
    </div>
  );
}
