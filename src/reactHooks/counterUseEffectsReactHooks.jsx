import React, {useState, useEffect} from 'react';

const CounterUseEffectsReactHooks = () => {
    const [count, setCount] = useState(0);
    // Called after every render
    useEffect(() => {
        console.log('Counter value is now ' + count)
    }, [count]);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default CounterUseEffectsReactHooks;