import { useState } from "react";
import { useNavigate } from "react-router";


const Payment = () => {
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (number.length < 11) {
      alert("Enter valid number");
      return;
    }
    navigate("/result");
  };

  return (
    <div style={styles.container}>
      <h2>Enter Your bKash Number 📱</h2>

      <input
        type="text"
        placeholder="01XXXXXXXXX"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        style={styles.input}
      />

      <button onClick={handleSubmit} style={styles.btn}>
        Confirm Payment
      </button>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    padding: "10px",
    margin: "10px",
  },
  btn: {
    padding: "10px 20px",
  },
};

export default Payment;