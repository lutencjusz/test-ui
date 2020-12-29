import React, { useState, Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { styles } from '../../constaints';
import { toaster } from 'evergreen-ui';

export default function FormAttributes(props) {
  const { register, handleSubmit, errors } = useForm();
  const [control, setControl] = useState({});
  const { taskId } = props.formState;
  const attr = props.attributes;

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
    toaster.success('Atrybuty uzupełnione', {
      description: `${data}`,
      duration: 3,
      id: 'forbidden-action',
    });
  };

  return (
    <Fragment>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="needs-validation"
        noValidate
      >
        <div className="form-row" style={styles.form_groups}>
          <h3
            style={{ textAlign: 'left', marginTop: 20 }}
            className="col-md-10 mb-"
          >
            Uzupełnij atrybuty
          </h3>
        </div>

        {attr[taskId].map((task) => {
          return (
            <div key={task} className="form-row" style={styles.form_groups}>
              <div className="col-md-10 mb-2">
                <label htmlFor={task}>{task}</label>
                <input
                  id={task}
                  ref={register}
                  name={task}
                  className={`form-control`}
                  onChange={() => _checkSetField({ task }, 'is-invalid', '')}
                />
              </div>
            </div>
          );
        })}
        <br />
        <button type="submit" className="btn btn-primary mb-4">
          Zatwierdź
        </button>
      </form>
    </Fragment>
  );
}
