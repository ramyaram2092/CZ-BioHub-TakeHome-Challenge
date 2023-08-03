import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import "../styles/Input.module.css"; 

const Input = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [err, seterrmsg] = useState("");
  const[status,setstatus]=useState(false);


  const handleInputChange = (event) => {
    const v = event.target.value;
    const isValidInput = /^\d+$/.test(v)
    console.log("input in text box :" + Number.isInteger(parseInt(v)));
    if (isValidInput) {
        setValue(v);
        setstatus(true);
      } else {
        setstatus(false);
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
    <div className="container">
        <div className="form-group">    
      <label htmlFor="title">Input</label>
      <input
        type="text"
        id="fib"
        placeholder="Enter your number"
        onChange={handleInputChange}
      />
      </div>
      <p>{err}</p>
      <button
        type="button"
        onClick={() => {
            if(status)
                findFibonacci()}
        }
      >
        Get the Fibonacci sequence
      </button>
    </div>
  );
};

export default Input;
