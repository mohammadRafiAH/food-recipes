import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Categories() {
  return (
    <List>
      <SLink to={"/Cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/Cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/Cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/Cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
}
const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;
const SLink = styled(NavLink)`
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right:2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949 , #313131);
    width: 4.5rem ;
    height: 4.5rem;
    cursor: pointer;
    transform: scale(0.8);
    h4{
      color:white;
      font-size:0.7rem;

    }
    svg{
      color:white;
      font-size:1.2rem;
    }
    &.active{
      background: linear-gradient(to right , #f27121,#e94057);
      svg{
          color: white;
      }
      h4{
          color: white;
      }
    }
`;

export default Categories;
