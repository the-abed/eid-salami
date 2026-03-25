import { useState } from "react";
import "../spinner.css";

const amounts = [100, 200, 500, 1000, 2000];

const Spinner = ({ onFinish }) => {
  const [rotation, setRotation] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [hasSpun, setHasSpun] = useState(false);

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    // Pick a random index
    const randomIndex = Math.floor(Math.random() * amounts.length);
    const degreesPerSlice = 360 / amounts.length;
    
    /* Calculate rotation:
       - 360 * 8: 8 full spins for drama
       - (randomIndex * degreesPerSlice): Move to the slice
       - We subtract from 360 to ensure the pointer (at top) matches the array index correctly
    */
    const stopAt = 360 - (randomIndex * degreesPerSlice);
    const newRotation = rotation + (360 * 8) + stopAt;

    setRotation(newRotation);

    setTimeout(() => {
      setSelected(amounts[randomIndex]);
      setIsSpinning(false);
      setHasSpun(true);
    }, 5000); // Matches the 5s transition in CSS
  };

  return (
    <div className="spinner-container">
      <div className="wheel-wrapper">
        <div className="pointer">💎</div>
        
        <div
          className="wheel"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {amounts.map((amt, i) => (
            <div
              key={i}
              className="slice"
              style={{ transform: `rotate(${i * (360 / amounts.length)}deg)` }}
            >
              <span>৳{amt}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ minHeight: "150px" }}>
        {!hasSpun ? (
          <button 
            className="spin-btn" 
            onClick={spinWheel} 
            disabled={isSpinning}
            style={isSpinning ? {opacity: 0.5, cursor: 'not-allowed'} : {}}
          >
            {isSpinning ? "GOOD LUCK..." : "SPIN FOR SALAMI"}
          </button>
        ) : (
          <div className="reveal-container">
            <p style={{ color: "#9ca3af", textTransform: "uppercase", letterSpacing: "2px" }}>You Won</p>
            <div className="money-display">
              <span className="currency">৳</span>{selected}
            </div>
            <button className="claim-btn" onClick={() => onFinish(selected)}>
              Transfer to bKash 💰
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Spinner;