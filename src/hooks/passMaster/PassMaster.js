import React, { useState, Fragment } from "react";
import zxcvbn from "zxcvbn";
import Is from "is_js";
import { useForm } from 'react-hook-form';
import { styles } from '../../constaints'

const strenghtPassword = ['Zbyt słabe', "Może być", "Mocne", "Bardzo mocne", "Ekstra mocne"]

const PassMaster = () => {

  const { register, handleSubmit, errors } = useForm();

  const [pass, setPassword] = useState(-1);
  const [control, setControl] = useState({});

  const _checkSetField = (
    field,
    classInvalid = 'is-invalid',
    classValid = 'is-valid'
  ) => {
    errors[field] ?
      setControl({
        ...control,
        [field]: classInvalid,
      }) :
      setControl({
        ...control,
        [field]: classValid,
      })
  }

  const _checkSetPassword = (password) => {
    !Is.empty(password) ?
      setPassword(zxcvbn(password).score) :
      setPassword(-1)
    !Is.empty(password) && zxcvbn(password).score < 1 ?
      setControl({
        ...control,
        password: 'is-invalid',
      }) :
      setControl({
        ...control,
        password: 'is-valid',
      })
    Is.empty(password) && setControl({
      ...control,
      password: '',
    })
  }

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Fragment>
      <h1>Formularz useForm</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate>
        <div className="form-row" style={styles.form_grups}>
          <div className="col-md-5 mb-3">
            <label htmlFor="name">Nazwa:</label>
            <input
              id="name"
              ref={register}
              name="name"
              className={`form-control ${control.name}`}
              onChange={() => _checkSetField('name', 'is-invalid', '')}
            />
          </div>
          <div className="col-md-7 mb-3">
            <label htmlFor="creditCard">Numer karty kredytowej:</label>
            <input
              id="creditCard"
              name="creditCard"
              className={`form-control ${control.creditCard}`}
              onChange={() => _checkSetField('creditCard', 'is-invalid', '')}
              ref={register({
                required: "Wymagane",
                validate: value => Is.creditCard(value),
              })}
              required
            />
            <div className="invalid-feedback">
              Niewłaściwy format karty kredytowej
            </div>
          </div>
        </div>
        <div className="form-row" style={styles.form_grups}>
          <div className="col-md-6 mb-3">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              className={`form-control ${control.email}`}
              onChange={() => _checkSetField('email', 'is-invalid', '')}
              ref={register({
                required: "Wymagane",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Niewłąściwy format email"
                }
              })}
              required
            />
            <div className="invalid-feedback">
              {errors.email && errors.email.message}
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="password">Hasło:</label>
            <input
              id="password"
              type="password"
              name="password"
              className={`form-control ${control.password}`}
              placeholder="Wprowadź hasło..."
              onChange={e => _checkSetPassword(e.target.value)}
              ref={register({
                required: "Wymagane",
                validate: () => pass >= 1,
              })}
              required
            />
            <div className="invalid-feedback">
              {strenghtPassword[pass]}
            </div>
            <div className="valid-feedback">
              {strenghtPassword[pass]}
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Zatwierdź</button>
      </form>
    </Fragment>
  );
};

export default PassMaster;