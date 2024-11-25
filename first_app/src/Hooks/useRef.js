import { useRef } from 'react';

export default function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1; // Updates the ref
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <div>
      <button onClick={handleClick}>
        Click me!
      </button>
      <p>Click count: {ref.current}</p> {/* Using ref.current here */}
    </div>
  );
}
