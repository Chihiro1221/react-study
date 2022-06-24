import React, { useContext, useState } from 'react';
import { createContext } from 'react';

const Context = createContext();
function Child(props) {
  const { num, setNum } = useContext(Context);
  return (
    <>
      <div>{num}</div>
      <button onClick={() => setNum(789)}>切换</button>
    </>
  );
}
function Father(props) {
  return (
    <div>
      <Child />
    </div>
  );
}
export default function App7() {
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
