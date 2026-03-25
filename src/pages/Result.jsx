import Spinner from "../components/Spinner";
import toast from "react-hot-toast";
import { useState } from "react";

const Result = () => {
  const [claimed, setClaimed] = useState(false);

  const handleFinish = (amount) => {
    toast.success(`🎉 You got ৳${amount} Eid Salami!`);
    setClaimed(true);
  };

  return (
    <div style={styles.container}>
      {!claimed ? (
        <>
          <h2>Spin & Win Your Salami 🎡</h2>
          <Spinner onFinish={handleFinish} />
        </>
      ) : (
        <h1>💰 Successfully Claimed!</h1>
      )}
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default Result;