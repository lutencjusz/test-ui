import React, { useState, useEffect, Suspense, Fragment } from "react";
import useFetch, { Provider } from "use-http";
import { LoadingIndicator } from "../../components";

const FetchDictionary = () => {
  const [todos, setTodos] = useState([]);
  // A. can put `suspense: true` here
  const { get, response } = useFetch();

  const loadInitialFetch = async () => {
    const todos = await get("/DEV/api/v1/dictionary");
    if (response.ok) setTodos(todos);
  };

  // componentDidMount
  useEffect(() => {
    loadInitialFetch();
  }, []);

  return (
    <Fragment>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.name}</div>
      ))}
      <button
        className="btn btn-primary"
        onClick={async () =>
          setTodos(await get(`/DEV/api/v1/table?name="categories"`))
        }
      >
        Pobierz Categories
      </button>
    </Fragment>
  );
};

const GetData = () => {
  const options = {
    suspense: true, // B. can put `suspense: true` here too
    retries: 1,
    retryDelay: 1000,
    onError: ({ error }) => {
      console.log(error.message);
    },
  };
  return (
    <Fragment>
      <h1>useFetch</h1>
      <Provider
        url="https://9tbnm33vx1.execute-api.eu-west-1.amazonaws.com"
        options={options}
      >
        <Suspense fallback={<LoadingIndicator />}>
          <FetchDictionary />
        </Suspense>
      </Provider>
    </Fragment>
  );
};

export default GetData;
