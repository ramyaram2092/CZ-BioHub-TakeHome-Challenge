import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Input = () => {

  const [value, setValue] = useState("");

  const [err, seterrmsg] = useState("");

  const handleInputChange = (event) => {
    const v = event.target.value;
    console.log("input in text box :" + Number.isInteger(parseInt(v)));
    if (Number.isInteger(parseInt(v))) {
      setValue(v);
    } else {
      seterrmsg("Enter a valid input");
      console.log("Setting error message ");
    }
  };

  const getOutput = async () => {
    
  };

  return (
    <div >
      <label htmlFor="title">Input</label>
      <input
        type="text"
        id="fib"
        placeholder="Enter your number"
        onChange={handleInputChange}
      />
      <p>{err}</p>
      <button
        type="button"
        onClick={() => getOutput()}
      >
        Get the Fibonacci sequence
      </button>
    </div>
  );
};

export default Input;
