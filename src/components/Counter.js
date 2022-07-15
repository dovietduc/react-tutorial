import {useState, useEffect} from 'react';

function Counter() {

    const [counter, setCounter] = useState(1);

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    useEffect(() => {
        console.log('useEffect running');
        document.title = `you click ${counter}`;
    })

    return (
        <div>
            <h1>Counter {counter}</h1>
            <button onClick={handleIncrement}>Increment</button>
            {console.log('component render end')}
        </div>
    )

}

export default Counter;
