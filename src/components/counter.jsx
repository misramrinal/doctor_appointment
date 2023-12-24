import react, { useState } from 'react';

const Counter = () => {
    const [val,incr]=useState(5);
    return(
        <div>
        <p>Counter - {val}</p>
        <button onClick={() => incr(val+1)}>Increment</button>
        </div>
    )
}
export default Counter