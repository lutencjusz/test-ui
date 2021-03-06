import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { styles } from '../../constaints';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import BorderWrapper from 'react-border-wrapper';

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
    <BorderWrapper
      borderColour="#007bffa8"
      borderWidth="2px"
      borderRadius="7px"
      borderType="solid"
      topElement={
        <p
          style={{
            width: 'calc(70px + 13vw)',
            maxWidth: '210px',
            lineHeight: '1rem',
            color: '#007bffa8',
          }}
        >
          Uzupełnij atrybuty
        </p>
      }
      topPosition={0.1}
      topOffset=".5vh"
      topGap="4px"
      innerPadding="5px"
      rightPosition={0.1}
      rightOffset="22px"
      rightGap="4px"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="needs-validation"
        noValidate
      >
        <div className="form-row" style={styles.form_groups}>
          {/* <h4 style={{ marginTop: 20, width: '40vw' }} className="col-md-10">
            Uzupełnij atrybuty
          </h4> */}
          <h4 style={{ width: '40vw' }} className="col-md-10 mb-3">
            {taskId}
          </h4>
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
                  ) : null}
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
          style={styles.formButtonRed}
        >
          Usuń
        </button>
      </form>
    </BorderWrapper>
  );
}
