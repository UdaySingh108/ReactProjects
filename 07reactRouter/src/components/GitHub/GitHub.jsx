import React, { useEffect, useState } from 'react'

export default function GitHub() {
    const [data,setData] = useState([])
    useEffect( () =>{
        fetch('https://api.github.com/users/UdaySingh108').then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    },[])
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl '>
    GitHub Folowers:{data.followers}
    <img src={data.avatar_url} alt="Git Picture" width={300}/></div>
  )
}