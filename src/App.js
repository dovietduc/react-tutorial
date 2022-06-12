import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

let stateValue; // vi tri khai bao global

function useState(intialState) {

	if(stateValue === undefined) {
		stateValue = intialState;
	}


    function setValue(value) {
		stateValue = value;

		// sau khi state thay doi render lai
		ReactDOM.createRoot(document.getElementById('root')).render(
			<React.StrictMode>
			  <App />
			</React.StrictMode>
		)
	}

    return [stateValue, setValue];
}

function App() {

	const [counter, setCounter] = useState(1);

	const handleIncrement = function(){
		setCounter(counter + 1);

	}

	const handleDecrement = function(){
		setCounter(counter - 1);
	}

	

    return (
        <div className="App">
            <h1>Counter {counter}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
}

export default App;

// tao state de quan li Counter
// khi state thay doi, thi giao dien thay doi
