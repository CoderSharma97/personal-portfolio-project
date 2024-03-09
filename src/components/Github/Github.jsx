import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    // const [data,setData]=useState([]);
  const data=  useLoaderData()
    // useEffect(
    //     ()=>{
    //         fetch('https://api.github.com/users/').then(response=>response.json()).then(data=>{
    //             console.log(data);
    //             setData(data);
    //         })
    //     },[]
    // )
  return (
    <div>Github : {data.followers}
    <img src={data.avatar_url   } alt="" />
     </div>
  )
}

export default Github
export const githubInfoLoader=async ()=>
{
    const response =await  fetch('https://api.github.com/users/codersharma97')
    return response.json();
}