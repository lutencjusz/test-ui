import React, { useState } from 'react';
import { useCss, useToggle } from 'react-use';
import { LoadingIndicator } from '../../components';
import Button from 'react-bootstrap/Button';

const DemoUseCss = () => {
  const [on, toggle] = useToggle(true);
  const [params, setParams] = useState({
    color: 'red',
    backgroundColor: 'yellow',
  });
  const className = useCss({
    border: `4px solid ${params.color}`,
    backgroundColor: params.backgroundColor,
    '&:hover': {
      border: `4px solid black`,
      backgroundColor: 'white',
    },
  });

  return (
    <div className="frame">
      <br />
      <h1 className={className} style={{ marginLeft: '25%', width: '50%' }}>
        UseCss
      </h1>
      {on && <LoadingIndicator className={className} />}
      <div>
        <Button
          className="btn btn-primary"
          onClick={() =>
            setParams({
              color: 'green',
              backgroundColor: 'blue',
            })
          }
        >
          Ciemny
        </Button>
        <Button
          className="btn btn-primary"
          onClick={() =>
            setParams({
              color: 'white',
              backgroundColor: 'black',
            })
          }
        >
          Nono
        </Button>
        <Button
          className="btn btn-primary"
          onClick={() =>
            setParams({
              color: '#5dba5d',
              backgroundColor: 'rgb(222, 220, 220)',
            })
          }
        >
          Standard
        </Button>
        <Button
          className="btn btn-primary"
          onClick={() =>
            setParams({
              color: 'red',
              backgroundColor: 'yellow',
            })
          }
        >
          Default
        </Button>
        <Button className="btn btn-primary" onClick={() => toggle()}>
          {on ? 'off' : 'on'}
        </Button>
      </div>
    </div>
  );
};

export default DemoUseCss;
