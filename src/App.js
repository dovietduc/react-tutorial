import './App.css';
import {useState} from 'react';

function App() {

	const [tags, setTags] = useState(['tag1', 'tag2', 'tag3']);

    return (
        <div className="App">
			<ul>
				{
					tags.map(
						tag => {
							return (
								<p>
									<li>{tag}</li>
								</p>
							)
						}
					)
				}
			</ul>
            <h1>Hello Word</h1>
        </div>
    );
}

export default App;
