import React, { useState } from 'react';
import { createContext } from 'react';

const Context = createContext();
function Child(props) {
  return (
    <Context.Consumer>
      {({ num, setNum }) => (
        <>
          <div>{num}</div>
          <button onClick={() => setNum(789)}>切换</button>
        </>
      )}
    </Context.Consumer>
  );
}
function Father(props) {
  return (
    <div>
      <Child />
    </div>
  );
}
export default function App5() {
  const [num, setNum] = useState(123);
  const changeNum = arg => {
    setNum(arg);
  };
  return (
    <Context.Provider value={{ num, setNum }}>
      <Father />
    </Context.Provider>
  );
}
