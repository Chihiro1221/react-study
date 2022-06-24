import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function App4() {
  /**
   * 1.函数式组件是没有生命周期的
   * 2.函数式组件没有state
   * 3.函数式组件没有this
   */
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);

  useEffect(() => {
    console.log('onMounted');
    return () => {
      console.log('beforeUnMount');
    };
  }, []);

  return (
    <div>
      <div>当前num1的值是：{num1}</div>
      <button onClick={() => setNum1(num1 + 1)}>num++</button>
      <div>当前num2的值是：{num2}</div>
      <button onClick={() => setNum2(num2 + 1)}>num++</button>
    </div>
  );
}
