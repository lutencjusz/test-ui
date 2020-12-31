import React, { useState, useEffect } from 'react';
import { render } from 'react-nil';

const Test = () => {
  const [active, set] = useState(false);
  useEffect(() => void setInterval(() => set((a) => !a), 5000), []);
  console.log(active);
  return <h1>Test</h1>;
};

export default function ReactNil() {
  render(<Test />);
  return (
    <div className="frame">
      <h1>React Nil</h1>
    </div>
  );
}
