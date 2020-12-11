import { useState, useMemo } from 'react';


function Q4() {

  const [count, setCount] = useState(0);
  
  const [arrIndex, setarrIndex] = useState(0);

  
  const arr = ['hello','welcome','to','react','js'];
  const word = arr[arrIndex];

  

  const LetterCount = word => {
    let i = 0;
    while (i < 1000000000) i++;
    return word.length;
  };

  const letterCount = useMemo(() => LetterCount(word), [word]);


  return (
    <div style={{ padding: '15px' }}>
      <h2>Compute number of letters (slow )</h2>
      <p>"{word}" has {letterCount} letters</p>
      <button onClick={() => {
          const next = arrIndex + 1 === arr.length ? 0 : arrIndex + 1;
          setarrIndex(next);
        }}>Next word </button>

      <h2>Increment a counter (fast )</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default Q4