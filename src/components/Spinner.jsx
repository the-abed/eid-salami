import { useState } from "react";
import "../spinner.css";

const amounts = [100, 200, 500, 1000, 2000];

const Spinner = ({ onFinish }) => {
  const [rotation, setRotation] = useState(0);
  const [selected, setSelected] = useState(null);
  const [spun, setSpun] = useState(false);

  const spinWheel = () => {
    const randomIndex = Math.floor(Math.random() * amounts.length);
    const anglePerItem = 360 / amounts.length;
    const randomRotation =
      360 * 5 + randomIndex * anglePerItem + anglePerItem / 2;

    setRotation(randomRotation);
    setSelected(amounts[randomIndex]);
    setSpun(true);
  };

  return (
    <div className="spinner-container">
      <div
        className="wheel"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {amounts.map((amt, i) => (
          <div
            key={i}
            className="slice"
            style={{
              transform: `rotate(${i * (360 / amounts.length)}deg)`,
            }}
          >
            <span>৳{amt}</span>
          </div>
        ))}
      </div>

      <div className="pointer">▼</div>

      {!spun ? (
        <button className="spin-btn" onClick={spinWheel}>
          Spin 🎡
        </button>
      ) : (
        <button
          className="claim-btn"
          onClick={() => onFinish(selected)}
        >
          Claim ৳{selected} 💰
        </button>
      )}
    </div>
  );
};

export default Spinner;