import React, { useEffect, useState } from "react";
import axios from "axios";

const SuperHeroes = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState("");

  const [dataTotal, setDataTotal] = useState({
    data: [],
    data2: [],
    data3: [],
    data4: [],
  });

  useEffect(() => {
    axios
      .get("http://localhost:4000/superheroes")
      .then((res) => {
        const test = { data: dataTotal.data.concat(res.data) };
        setDataTotal(test);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });

    axios.get("http://localhost:4000/testCase2").then((res) => {
      setDataTotal({ ...dataTotal, data2: dataTotal.data2.concat(res.data) });
    });

    axios.get("http://localhost:4000/testCase3").then((res) => {
      setDataTotal({ ...dataTotal, data3: res.data });
    });
    axios.get("http://localhost:4000/testCase4").then((res) => {
      setDataTotal({ ...dataTotal, data4: res.data });
    });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  //   console.log(dataTotal);

  return (
    <>
      <h2>Super Heroes Page</h2>
      <h3>case1</h3>
      {dataTotal.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
      <h3>case2</h3>
      {dataTotal.data2.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
      <h3>case3</h3>
      {dataTotal.data3.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
      <h3>case4</h3>
      {dataTotal.data4.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};
export default SuperHeroes;
