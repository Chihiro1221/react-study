import React, { useState } from 'react';

function Child(props) {
  return (
    <>
      <div>{props.num}</div>
      <button onClick={() => props.changeNum(789)}>切换</button>
    </>
  );
}
function Father(props) {
  return (
    <div>
      <Child num={props.num} changeNum={props.changeNum} />
    </div>
  );
}
export default function App5() {
  const [num, setNum] = useState(123);
  const changeNum = arg => {
    setNum(arg);
  };
  return <Father num={num} changeNum={changeNum} />;
}
