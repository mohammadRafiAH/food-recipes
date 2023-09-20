
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./popular.css";
import { Link } from "react-router-dom";

function Veggie() {
  const [veggie, setveggie] = useState([]);

  useEffect(() => {
    getveggie();
  }, []);
   
  
  const getveggie = async () => {

  const check = localStorage.getItem("veggie");
  if (check) {
    setveggie(JSON.parse(check))
  }else{
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY_KEY}&number=10&tag=vegetarian`
    );
    const data = await api.json();

    localStorage.setItem("veggie", JSON.stringify(data.recipes))
    console.log(data.recipes);
    setveggie(data.recipes);
  }
    
  };
  return (
    <div className="container">
      <Wrapper>
        <h3> our Vegiterian Picks</h3>
        <Splide 
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag:"free",
            gap: "5rem",
          }}
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Link to={'recipe/'+recipe.id}>
                <Card className="flex-container">
                  <p style={{color:"white"}}>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <div className="gradient"></div>
                </Card >
                </Link>
                
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  )
}
const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  border-radius: 2rem;
  min-height: 20rem;
  overflow: hidden;
  position:relative;
  cursor:pointer;
  img {
    border-radius: 2rem;
    height:100%;
    position:absolute;
    left:0;
    width:100%;
    object-fit:cover;
  }
  p{
    position:absolute;
    left:50%;
    bottom:0%;
    z-index:10;
    transform :translate(-50%,50%);
    width:100%;
    text-align:center;
    display:flex;
    justify-content:center;
    height:40%;
    font-size:1rem;
    font-weight:600;
    align-item:center;
  }
`;

export default Veggie