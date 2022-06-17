import {useState} from 'react';

function Counter() {

    const [counter, setCounter] = useState(2);

    const formatZezo = function () {
        if(counter == 0) {
            return <span>ZeZo</span>;           
        } else if(counter == 1) {
            return <span>One</span>;
        } else {
            return <span>{counter}</span>;
        }
    }

    return (
        <h2>Counter {formatZezo()}</h2>
    )
}

export default Counter;