import './App.css';
import Child from './component/Child';
import {useState} from 'react';

function App() {

  const [parentToChild, setParentToChild] = useState('parent to child');

  const handleDelete = (id) => {
      console.log('id', id);
  }

  return (
    <div className="App">
      <h1>Hello Word</h1>
      <Child 
          parentToChild={parentToChild} 
          onDelete={handleDelete}
          name="duc" />
    </div>
  );

}

export default App;
