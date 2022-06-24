import React, { useState, memo } from 'react';
import { useCallback } from 'react';

const Child = memo(props => {
  console.log('child...');
  return (
    <div>
      <button onClick={props.handleClick}>加一</button>
    </div>
  );
});

export default function App9() {
  const [num, setNum] = useState(1);

  const handleClick = useCallback(() => {
    setNum(num => num + 1);
  }, []);

  return (
    <div>
      <div>当前num的值是：{num}</div>
      <Child handleClick={handleClick} />
    </div>
  );
}
