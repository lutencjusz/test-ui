import React, { useState, Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { styles } from '../../constaints';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import Is from 'is_js';

export default function FormAttributes(props) {
  const { taskId } = props.formState;
  const attr = props.attributes;

  const initialArray = [];
  attr[taskId].map((at) => initialArray.push([at.name, at.value]));
  const defaultValues = Object.fromEntries(initialArray);

  const { register, handleSubmit, errors, formState } = useForm({
    defaultValues,
  });
  const [control, setControl] = useState({});

  const _checkSetField = (
    field,
    classInvalid = 'is-invalid',
    classValid = 'is-valid'
  ) => {
    errors[field]
      ? setControl({
          ...control,
          [field]: classInvalid,
        })
      : setControl({
          ...control,
          [field]: classValid,
        });
  };

  const onSubmit = (data) => {
    const dataValueArray = Object.values(data);
    const newData = attr[taskId].map((a, index) => {
      return {
        ...a,
        value: dataValueArray[index],
      };
    });
    props.submitAttributes(taskId, newData);
  };

  return (
    <Fragment>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="needs-validation"
        noValidate
      >
        <div className="form-row" style={styles.form_groups}>
          <h3 style={{ marginTop: 20 }} className="col-md-10">
            Uzupełnij atrybuty
          </h3>
          <h6 className="col-md-10 mb-3">{taskId}</h6>
        </div>

        {attr[taskId].map((task) => {
          return (
            <div
              key={task.name}
              className="form-row"
              style={styles.form_groups}
            >
              <div className="col-md-10 mb-2">
                <label htmlFor={task.name}>
                  {task.required ? (
                    <FontAwesomeIcon
                      icon={faStarOfLife}
                      size="xs"
                      style={styles.formRequired}
                    />
                  ) : (
                    ''
                  )}
                  {task.name}
                </label>
                <input
                  id={task.name}
                  name={task.name}
                  type={task.type}
                  className={`form-control ${control[task.name]}`}
                  onChange={() =>
                    _checkSetField(`${task.name}`, 'is-invalid', '')
                  }
                  ref={register({
                    required: true,
                    validate: (a) => Is.number(parseInt(a)),
                  })}
                  required
                />
                <div className="invalid-feedback">Niewłaściwy format pola</div>
              </div>
            </div>
          );
        })}
        <br />
        <button
          type="submit"
          disabled={!formState.isDirty}
          className="btn btn-primary mb-4"
          style={styles.formButton}
        >
          Wyślij
        </button>
        <button
          type="reset"
          className="btn btn-danger mb-4"
          style={styles.formButton}
        >
          Usuń
        </button>
      </form>
    </Fragment>
  );
}
