import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestTotal = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/testTotal')
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //console.log(data[0].superheroes);

  return (
    <>
      <h3>testTotal</h3>
      {data[0].superheroes.map((hero, index) => {
        return <div key={index}>{hero.name}</div>;
      })}
      <h3>testTotal2</h3>
      {data[1].testCase2.map((hero, index) => {
        return <div key={index}>{hero.name}</div>;
      })}
      <h3>testTotal3</h3>
      {data[2].testCase3.map((hero, index) => {
        return <div key={index}>{hero.name}</div>;
      })}
      <h3>testTotal4</h3>
      {data[3].testCase4.map((hero, index) => {
        return <div key={index}>{hero.name}</div>;
      })}
    </>
  );
};

export default TestTotal;
