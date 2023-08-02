import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

const Input = () => {
  const navigate = useNavigate();

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

  const findFibonacci = async () => {
    const response = await Axios.post(
        `http://localhost:8080/api/getFibonacci/${value}`
      );
      // console.log("recived response:"+response.data.length);
  
      if (response.data.length > 0) {
        console.log("response:" + response.data.length);
  
        const arr = response.data.map((item) => item.value);
        //navigate to the next page with the response
  
        navigate("Display", { state: arr });
      }
    
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
        onClick={() => findFibonacci()}
      >
        Get the Fibonacci sequence
      </button>
    </div>
  );
};

export default Input;
