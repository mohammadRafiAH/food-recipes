import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate()

  const submitHandler =(e)=>{
    e.preventDefault();
     navigate('/searched/' + input);
    console.log("clicked");
    
  }

  return (
    <FormStyle onSubmit={submitHandler} >
      <div className="">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <FaSearch />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  div {
    width: 600px;
    position: relative;
    input {
      border: none;
      background: linear-gradient(35deg, #494949, #313131);
      font-size: 1.5rem;
      color: white;
      padding: 0.5rem 3rem;
      border: none;
      border-radius: 2rem;
      outline: none;
      width: 100%;
    }
    svg {
      position: absolute;
      top: 50%;
      left: 0%;
      transform: translate(100%, -50%);
      color: white;
    }
  }
`;

export default Search;
