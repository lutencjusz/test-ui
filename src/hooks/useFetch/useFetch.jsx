/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import useFetch, { Provider } from 'use-http';
import { SuspenseErrorBoundary } from '../../components';
import Toast from 'react-bootstrap/Toast';
import 'bootstrap/dist/css/bootstrap.min.css';

const FetchDictionary = () => {
  let attempts = useRef(0);
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(false);
  const [toastState, setToastState] = useState({
    backgroundColor: 'orange',
    title: 'Posts',
    body: 'Nie mogę połączyć się z bazą...',
  });
  // A. can put `suspense: true` here
  const { get, response } = useFetch({
    cacheLife: 3000,
    retries: 2,
    retryOn({ attempt, error, response }) {
      attempts.current = attempt + 1;
      console.log('(retryOn) attempt', attempt);
      console.log('(retryOn) error', error);
      console.log('(retryOn) response', response);
      setTodos([]);
      if (attempt === 0 && !response.ok) {
        setToastState({
          backgroundColor: 'orange',
          title: '',
          body: 'Nie udało się pobrać danych, próbuję jeszcze raz...',
        });
        setShow(true);
      }
      return response && response.status >= 300;
    },
    retryDelay({ attempt, error, response }) {
      console.log('(retryDelay) attempt', attempt);
      console.log('(retryDelay) error', error);
      console.log('(retryDelay) response (delay)', response);
      return 1000 * (attempt + 1);
    },
    cachePolicy: 'no-cache',
  });

  const loadInitialFetch = async () => {
    const todos = await get('/posts1');
    if (response.ok) setTodos(todos);
    if (!response.ok) {
      setToastState({
        backgroundColor: 'red',
        title: 'Posts',
        body: 'Nie udało się pobrać danych',
      });
      setShow(true);
    }
  };

  const handlePosts = async () => {
    const todos = await get('/posts');
    if (response.ok) setTodos(todos);
    if (!response.ok) {
      setToastState({
        backgroundColor: 'red',
        title: 'Posts',
        body: 'Nie udało się pobrać danych.',
      });
      setShow(true);
    }
  };

  const handleAlbums = async () => {
    const todos = await get('/albums');
    if (response.ok) setTodos(todos);
    if (!response.ok) {
      setToastState({
        backgroundColor: 'red',
        title: 'Albums',
        body: 'Nie udało się pobrać danych.',
      });
      setShow(true);
    }
  };

  const handleUsers = async () => {
    const todos = await get('/users1');
    if (response.ok) setTodos(todos);
    if (!response.ok) {
      setToastState({
        backgroundColor: 'red',
        title: 'Users',
        body: 'Nie udało się pobrać danych.',
      });
      setShow(true);
    }
  };

  // componentDidMount
  useEffect(() => {
    loadInitialFetch();
  }, []);

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: 'relative',
        minHeight: '100px',
      }}
    >
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
      <Toast
        onClose={() => setShow(false)}
        show={show}
        delay={2000}
        autohide
        style={{
          background: toastState.backgroundColor,
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">{toastState.title}</strong>
        </Toast.Header>
        <Toast.Body>{toastState.body}</Toast.Body>
      </Toast>
      <button className="btn btn-primary" onClick={handlePosts}>
        Pobierz Posty
      </button>
      <button className="btn btn-primary" onClick={handleAlbums}>
        Pobierz Albumy
      </button>
      <button className="btn btn-danger" onClick={handleUsers}>
        Błąd! Pobierz Users
      </button>
    </div>
  );
};

const GetData = () => {
  const options = {
    suspense: true, // B. can put `suspense: true` here too
  };

  return (
    <div className="frame">
      <h1>useFetch</h1>
      <Provider url="https://jsonplaceholder.typicode.com" options={options}>
        <SuspenseErrorBoundary>
          <FetchDictionary />
        </SuspenseErrorBoundary>
      </Provider>
    </div>
  );
};

export default GetData;
