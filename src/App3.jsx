import { useState } from 'react';

export default function App3() {
  const [title, setTitle] = useState('houdunren.com');
  const handleClick = () => {
    setTitle('hello world');
  };
  return (
    <>
      <div>{title}</div>
      <button onClick={() => handleClick()}>切换</button>
    </>
  );
}
