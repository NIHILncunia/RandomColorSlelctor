import React, { useState } from 'react';

const TestApp = () => {
  const [ name, setName, ] = useState('React');

  const onclickButton = () => {
    if (name === 'React') {
      setName('Vue');
    } else {
      setName('React');
    }
  };

  return (
    <>
      <p>Hello {name}!!</p>
      <button onClick={onclickButton}>변경</button>
    </>
  );
};

export default TestApp;