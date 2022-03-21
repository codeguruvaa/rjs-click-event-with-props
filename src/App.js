import React, { useState } from 'react';
import Child from './Child';

function App() {

  var [count, setCount] = useState(0)

  var handleAdd = () =>{
    setCount(count + 1)
  }

  return (
    <div>

      <h2>{count}</h2>
      <Child handleAdd={handleAdd} />


    </div>
  );
}

export default App;