import './App.css';
import {useEffect, useState} from 'react';

let i = 0;

function App() {

	// scope app

	i++;

	console.log('%c start! ', 'color: red');
	console.log('render start version 00' + i);

	const id = 1;
	const [post, setPost] = useState({});
	console.log(`id version 00${i}`, id);

	console.log('post', post);

	useEffect(() => {

		console.log('useefeect running version 00' + i);
		fetch('https://jsonplaceholder.typicode.com/todos/' + id)
			.then(response => response.json())
			.then(json => {
				setPost(json);
			})
	}, [id])

    return (
        <div className="App">
            <div>
				<h1>{post.id}</h1>
				<p>{post.title}</p>
			</div>
			{ console.log('render end version 00' + i) }
			{ console.log('%c end! ', 'color: red') }
        </div>
    );

}


export default App;
