import React ,{useEffect,useState}from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function Searched() {
    let params = useParams();
    const [searchedRecipes, setSearchedRecipes] = useState([]);
  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_KEY_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
    console.log(recipes);
  };
  useEffect(()=>{
    getSearched(params.search);
  },[params.search])
  return (
    <Grid>
        {searchedRecipes.map((items)=>{
            return(
                <Card key={items.id}>
                <Link to={'/recipe/' + items.id}>
                <img src={items.image} alt={items.title}  />
                <h4>{items.title}</h4>
                </Link>
                </Card>
                
            )
        })}

    </Grid>
  )
}
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    gap: 2rem;
`;
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoretion: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
  
`;

export default Searched