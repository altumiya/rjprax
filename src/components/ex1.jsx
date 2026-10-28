import React from 'react';
import { useState } from 'react';

function Ex1() {
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(10);
  const [text, setText] = useState('t');

  const styles = {
    main: {
      padding: '20px',
    },
    title: {
      color: '#5C6AC4'
    },
  };

  return (
    <div style={styles.main}>
      <h1 style={styles.title}>Hello, World!</h1>

      <div>
        <button onClick={() =>{if (count<20)  {setCount(count => count + 3)}}}>
          +
        </button>

        <span> count {count} </span>

        <button onClick={() =>{if (count >0){ setCount(count => count - 2)}}}>
          -
        </button>
        <button
        onClick={() => {
          if (text.length < 20) {
            setText(prev => prev + 't');
          }
        }}
      >
        +
      </button>

      <p>{text}</p>

      <button
        onClick={() => {
          if (text.length > 1) {
            setText(prev => prev.slice(0, -1));
          }
        }}
      >
        -
      </button>

      <button onClick={() =>{if (count2<20)  {setCount2(prevCount => prevCount + 1)
      setCount2(prevCount => prevCount + 1)
      setCount2(prevCount => prevCount + 1)
      setCount2(prevCount => prevCount + 1)}}}>
          +
        </button>

        <span> count {count2} </span>

        <button onClick={() =>{if (count2 >0){ setCount2(prevCount => prevCount - 1)}}}>
          -
        </button>
      </div>
    </div>
  );
}

export default Ex1;