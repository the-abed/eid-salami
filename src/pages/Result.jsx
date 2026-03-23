import Spinner from "../components/Spinner";
import toast from "react-hot-toast";
import { useState } from "react";

const Result = () => {
  const [done, setDone] = useState(false);

  const handleComplete = (amount) => {
    setDone(true);
    toast.success(`You received ৳${amount} Salami 🎉`);
  };

  return (
    <div style={styles.container}>
      {!done ? (
        <>
          <h2>Processing Payment...</h2>
          <Spinner onComplete={handleComplete} />
        </>
      ) : (
        <h1>🎉 Eid Salami Received!</h1>
      )}
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
};

export default Result;