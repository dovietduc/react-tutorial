import './App.css';
import {useEffect, useState} from 'react';

function App() {

	const [post, setPost] = useState({});

	useEffect(() => {

		console.log('useefeect running');
		fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then(response => response.json())
			.then(json => {
				setPost(json);
			})
	}, [])

    return (
        <div className="App">
            <div>
				<h1>{post.id}</h1>
				<p>{post.title}</p>
			</div>
        </div>
    );

}

export default App;
