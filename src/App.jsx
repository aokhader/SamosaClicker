import './App.css';
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => {
    setCount(count + multiplier);
  }

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setCount(count - 10);
      setMultiplier(multiplier * 2);
    }
  }

  const buyPartyPack = () => {
    if (count >= 100) {
      setCount(count - 100);
      setMultiplier(multiplier * 5);
    }
  }

  const buyFullFeast = () => {
    if (count >= 1000) {
      setCount(count - 1000);
      setMultiplier(multiplier * 10);
    }
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <h3>Multiplier: {multiplier}</h3>
        <img onClick={updateCount} className="samosa" src="https://png.pngtree.com/png-vector/20240804/ourmid/pngtree-deliciously-spiced-vegetarian-samosa-recipe-for-a-perfect-snack-png-image_13373265.png" />

        <div className="container">
          <div className="upgrade">
            <h3>Double Stuffed 👯‍♀️</h3>
            <p>2x per click</p>
            <button onClick={buyDoubleStuffed}>10 samosas</button>
          </div>
          <div className="upgrade">
            <h3>Party Pack 🎉</h3>
            <p>5x per click</p>
            <button onClick={buyPartyPack}>100 samosas</button>
          </div>
          <div className="upgrade">
            <h3>Full Feast 👩🏽‍🍳</h3>
            <p>10x per click</p>
            <button onClick={buyFullFeast}>1000 samosas</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App