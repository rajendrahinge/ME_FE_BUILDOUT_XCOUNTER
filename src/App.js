import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [val, setVal] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
	setVal('');
  };

  const handleEqual = () => {
    try {
		if(input === '') {
			setVal('Error');
		} else {
			setVal(eval(input));
		}		
    } catch (error) {
		setVal('Error');
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly className="input-display" />
	  <div className='output_val'>{val}</div>
      <div className="keypad">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick('0')}>0</button>        
        <button onClick={handleEqual}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
}

export default App;
