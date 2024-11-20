import React from "react";
import useToggle from "./hooks/useToggle";
import useFetch from "./hooks/useFetch";
import useCustomState from "./hooks/useCustomState";

function App() {
  const [count, setCount, resetCount] = useCustomState(0);
  const [isVisible, toggleVisibility] = useToggle();
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={resetCount}>Reset</button>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Product Name
      </button>

      {isVisible && (
        <>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {data && (
            <ul>
              {data.map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default App;
