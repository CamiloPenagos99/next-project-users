import React from "react";
import Container from "../componentes/container";
import fetchI from "isomorphic-fetch";


const Index = ({data}) => {
  return (
    <div>
    <Container name="Home">
      <h1>Home</h1>
      <p>{data}</p>
    </Container>
    </div>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetchI('https://jsonplaceholder.typicode.com/users')
  const json = await res.json()
  const data = JSON.stringify(json)
  return { data }
}

export default Index;
