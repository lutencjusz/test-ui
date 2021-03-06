import React, { useState, useEffect, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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
    '& > div.buttons': {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'start',
    },
    '& > div.buttons > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function MaterialUI() {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);

  const [emailError, setEmailError] = useState(true);
  const [firstNameError, setFirstNameError] = useState(true);
  const [submitButtonDisable, setSubmitButtonDisable] = useState(true);

  const initialValues = {
    firstName: 'Michał',
    lastName: 'Sobieraj',
    email: 'lutencjusz@email.pl',
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

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenDialog(true);
  };

  const defaultForm = useCallback(() => {
    setEmail(initialValues.email);
    setFirstName(initialValues.firstName);
    setLastName(initialValues.lastName);
    setFirstNameError(true);
    setEmailError(true);
  }, [initialValues]);

  const clearForm = useCallback(() => {
    setEmail('');
    setFirstName('');
    setLastName('');
    setFirstNameError(true);
    setEmailError(true);
  }, [initialValues]);

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <div className="frame">
      <h1>Material UI</h1>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Zatwierdzono formularz'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Imię: {firstName}, Nazwisko: {lastName}, <br />
            email: {email}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
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
          onInput={(e) => setFirstName(e.target.value)}
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
          onInput={(e) => setEmail(e.target.value)}
          required={true}
        />
        <div className="buttons">
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
            onClick={() => clearForm()}
          >
            Usuń
          </Button>
          <Button variant="outlined" onClick={() => defaultForm()}>
            początkowe
          </Button>
        </div>
      </form>
    </div>
  );
}
