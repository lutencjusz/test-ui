import React, { useState, useEffect, Fragment } from 'react';

const Resolver = () => {
    const [count, setCount] = useState(0);
    const [render, setRender] = useState(0);

    // Podobnie do metod componentDidMount i componentDidUpdate:
    useEffect(() => {
        // efekt polega na zaktualizowaniu tytuł dokumentu korzystając z interfejsu API przeglądarki
        document.title = `Kliknięto ${count} razy`;
        setRender(render + 1);
    }, [count]);

    return (
        <Fragment>
            <h1>useEffect</h1>
            <p>Kliknięto {count} razy</p>
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
                {`wyrenderowano ${render}`}
      </button>
        </Fragment>
    );
}

export default Resolver;