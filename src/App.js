import './App.css';
import {useState} from 'react';

function App() {

	const [counter, setCounter] = useState(1);

	const handleIncrement = () => {
		setCounter(counter + 1);
	}

	console.dir(handleIncrement);

    return (
        <div className="App">
            <h1>Counter {counter}</h1>
			<button onClick={handleIncrement}>
				Increment
			</button>
        </div>
    );
}

export default App;


// lan render dau tien

	// Điều kiện để trở thành closure	
	// 1. Nó phải là hàm được bao đóng trong function
	// 2. Nó phải sử dụng biến của function bên ngoài

	// lan thu 2 render
	// Điều kiện để trở thành closure	
	// 1. Nó phải là hàm được bao đóng trong function
	// 2. Nó phải sử dụng biến của function bên ngoài
