import React from "react";
import Container from "../componentes/container";
import fetchI from "isomorphic-fetch";
import Users from "../componentes/users";


const Index = ({json}) => {
  //console.log({json})
  return (
    <div>
    <Container name="Home">
      <h1>Home:</h1>
      <hr></hr>
      <Users usuarios={json}></Users>
    </Container>
    </div>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetchI('https://jsonplaceholder.typicode.com/users')
  const json = await res.json()
  const data = JSON.stringify(json)
  return { json }
}

export default Index;
