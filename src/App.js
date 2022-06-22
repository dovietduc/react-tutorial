import {useState} from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(1);

  const formatClass = function() {
    let clasCommon = "badge p-3";
    if(counter == 0) {
      clasCommon += " badge-warning";
    } else {
      clasCommon += " badge-primary";
    }

    return clasCommon;
  }

  return (
    <div className="App">
      <h1>Hello Word</h1>
      <span class={formatClass()}>Primary</span>
    </div>
  );

}

export default App;
