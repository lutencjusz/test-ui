import React, { useReducer } from 'react';

export default function UseReducer() {
  const SET_COUNTER = 'SET_COUNTER';
  const SET_MAX_STATE = 'SET_MAX_STATE';
  const SET_MIN_STATE = 'SET_MIN_STATE';
  const SET_MAX_VALUE = 'SET_MAX_VALUE';
  const SET_MIN_VALUE = 'SET_MIN_VALUE';

  const initialValue = {
    minButtonActive: true,
    maxButtonActive: true,
    counter: 0,
    max: 5,
    min: 0,
  };

  function Reducer(state, action) {
    switch (action.type) {
      case SET_MIN_STATE:
        return {
          ...state,
          minButtonActive: action.payload,
        };
      case SET_MAX_STATE:
        return {
          ...state,
          maxButtonActive: action.payload,
        };
      case SET_COUNTER:
        return {
          ...state,
          counter: action.payload,
        };
      case SET_MAX_VALUE:
        return {
          ...state,
          max: action.payload,
        };
      case SET_MIN_VALUE:
        return {
          ...state,
          min: action.payload,
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(Reducer, initialValue);

  const setNewCounter = (newCounter) => {
    dispatch({
      type: SET_COUNTER,
      payload: newCounter,
    });
    checkState(newCounter);
  };

  const setMax = () => {
    dispatch({
      type: SET_MAX_VALUE,
      payload: event.target.value,
    });
    console.log(event.target.value);
  };

  const setMin = () => {
    dispatch({
      type: SET_MIN_VALUE,
      payload: event.target.value,
    });
    console.log(event.target.value);
  };

  const checkState = (newCounter) => {
    if (newCounter >= state.max) {
      dispatch({
        type: SET_MAX_STATE,
        payload: false,
      });
    } else {
      dispatch({
        type: SET_MAX_STATE,
        payload: true,
      });
    }
    if (newCounter <= state.min) {
      dispatch({
        type: SET_MIN_STATE,
        payload: false,
      });
    } else {
      dispatch({
        type: SET_MIN_STATE,
        payload: true,
      });
    }
  };

  return (
    <div className="frame">
      <h1>UseReducer</h1>
      <h3>Pokazuje działanie useRedux</h3>
      <div>
        <form>
          <div
            className="form-row"
            style={{ textAlign: 'left', marginLeft: '25%' }}
          >
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="minInput">Min.</label>
                <input
                  type="Number"
                  className="form-control"
                  value={state.min}
                  id="minInput"
                  onChange={setMin}
                />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="maxInput">Max.</label>
                <input
                  type="Number"
                  className="form-control"
                  value={state.max}
                  id="maxInput"
                  onChange={setMax}
                />
              </div>
            </div>
          </div>
        </form>
        <h2> Pokazuje wartość licznika: {state.counter}</h2>
        <button
          style={{ marginRight: 10 }}
          className="btn btn-primary"
          disabled={!state.minButtonActive}
          onClick={() => setNewCounter(state.counter - 1)}
        >
          Zmniejsz licznik
        </button>
        <button
          className="btn btn-primary"
          disabled={!state.maxButtonActive}
          onClick={() => setNewCounter(state.counter + 1)}
        >
          Zwiększ licznik
        </button>
      </div>
    </div>
  );
}
