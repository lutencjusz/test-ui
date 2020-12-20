/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const Resolver = () => {
    const [count, setCount] = useState(0);
    const [render, setRender] = useState(0);

    // Podobnie do metod componentDidMount i componentDidUpdate:
    useEffect(() => {
        // efekt polega na zaktualizowaniu tytuł dokumentu korzystając z interfejsu API przeglądarki
        // eslint-disable-next-line no-undef
        document.title = `Kliknięto ${count} razy`;
        setRender(render => render + 1);
    }, [count]); // ponieważ useEffect nie reaguje na render, to nie wpada w pętle

    return (
        <div className="frame">
            <h1>useEffect</h1>
            <p>Kliknięto {count} razy</p>
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
                {`renderowano ${render}`}
            </button>
        </div>
    );
}

export default Resolver;