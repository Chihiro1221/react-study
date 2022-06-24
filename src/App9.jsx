import React, { useState, memo } from 'react';

const Child = () => memo({
  console.log('child...');
  return <div>child...</div>;
});

export default function App9() {
  const [num, setNum] = useState(1);
  return (
    <div>
      <div>当前num的值是：{num}</div>
      <button onClick={() => setNum(num + 1)}>加一</button>
      <Child />
    </div>
  );
}
