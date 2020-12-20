/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLatest, useToggle } from "react-use";
import Button from "react-bootstrap/Button";

const DemoLatest = () => {
  const [count, setCount] = useState(0);
  const [on, toggle] = useToggle(false);
  const latestCount = useLatest(count);

  const handleAlertClick = () => {
    setTimeout(() => {
      alert(
        `Latest count value: ${latestCount.current}, useState value: ${count}`
      );
      toggle();
    }, 3000);
    toggle();
  };

  return (
    <div className="frame">
      <h1>useLatest i useToggle</h1>
      <p>Kliknąłeś {count} razy...</p>
      <Button onClick={() => setCount(count + 1)}>
        {on ? "Zwiększ teraz po Alert" : "Zwiększ licznik"}
      </Button>
      <Button onClick={handleAlertClick}>Pokaż Alert</Button>
    </div>
  );
};

export default DemoLatest;
