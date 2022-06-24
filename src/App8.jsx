import React, { useRef, useState } from 'react';

export default function App8() {
  const [value, setValue] = useState('');
  const input = useRef();

  return (
    <div>
      <h3>受控组件</h3>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={() => alert(value)}>获取value</button>
      <hr />
      <h3>不受控组件</h3>
      <input type="text" ref={input} />
      <button onClick={() => alert(input.current.value)}>获取value</button>
    </div>
  );
}
