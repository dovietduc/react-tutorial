import {useState, useEffect}  from 'react';

function Counter() {

    const [counter, setCounter] = useState(1);

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    useEffect(() => {
        console.log('effect running');
        document.title = `You clicked ${counter} times`;
    })

    return (
        <div>
            <h1>Counter {counter}</h1>
            <button onClick={handleIncrement}>Increment</button>
            {console.log("render data")}
        </div>
        
    )
}

export default Counter;
