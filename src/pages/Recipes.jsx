import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipes() {
  const [details, setDetails] = useState({});
  console.log(details);
  const [activeTab, setActiveTab] = useState("Instractions");
  let params = useParams();
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_KEY_KEY}`
    );
    const detailsData = await data.json();
    setDetails(detailsData);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  return (
    <DetailsWrapper>
      <ImageSize>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </ImageSize>
      <Info>
        <ButtonFlex>
          <Button
            className={activeTab === "Instractions" ? "active" : ""}
            onClick={() => {
              setActiveTab("Instractions");
            }}
          >
            Instractions
          </Button>
          <Button
            className={activeTab === "Ingredients" ? "active" : ""}
            onClick={() => {
              setActiveTab("Ingredients");
            }}
          >
            Ingredients
          </Button>
        </ButtonFlex>
        {activeTab === "Instractions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === "Ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => {
              <li key={ingredient.id}>{ingredient.original}</li>;
            })}
          </ul>
        )}
      </Info>
    </DetailsWrapper>
  );
}

const DetailsWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  h2 {
    margin-bottom: 2rem;
  }
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  li {
    font-size: 1rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;
const ImageSize = styled.div`
  margin: 0 2rem;
  font-size: 1rem;
  padding: 0 1rem;
  img{
    width:400px;
  }
`;
const Button = styled.div`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  font-weight: 600;
`;
const Info = styled.div`
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
`;
const ButtonFlex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export default Recipes;
