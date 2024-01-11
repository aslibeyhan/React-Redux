import React from 'react';
import Counter from './components/Counter';
import IncreaseCounter from './components/IncreaseCounter';
import DescreaseCounter from './components/DescreaseCounter';
import IncreaseByTwoCounter from './components/IncreaseByTwoCounter';

function App() {
  return (
    <div >
     <Counter/>
     <IncreaseCounter/>
     <DescreaseCounter/>
     <IncreaseByTwoCounter/>
    </div>
  );
}

export default App;
