import React, { useState } from "react";

export type ExampleProps = {
  initialCount?: number;
};

export const Example: React.FC<ExampleProps> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="example-component">
      <h2>Example Counter Component</h2>
      <p className="count-display">Current count: {count}</p>
      <div className="button-group">
        <button
          className="increment-button"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="decrement-button"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          className="reset-button"
          onClick={() => setCount(initialCount)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
