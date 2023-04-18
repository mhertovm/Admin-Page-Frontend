import { useEffect, useState } from 'react';

function Home() {
  const [data, setdata]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:3001/product")
    .then(res=> res.json())
    .then(res=>setdata(res))
  },[])

  return(
    data.map((value, index)=>{
      console.log(value.name)
      return(
        <h1 key={index}>{value.name}</h1>
      )
    })
  )
  
  }

export default Home;