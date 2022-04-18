import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const RQSuperHeroes = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "super-heroes",
    fetchSuperHeros,
    { cacheTime: 1000, staleTime: 30000 }
  );

  //console.log(isLoading, data);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};
export default RQSuperHeroes;
