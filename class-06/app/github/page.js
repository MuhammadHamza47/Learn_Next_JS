'use client'
import React, { useState } from 'react'
import Image from 'next/image'
export default function Github() {
    const [useName, setUserName] = useState('');
    const [followers, setFollowers] = useState([]); 
    const [data, setData] = useState(null);

    const onChangehandler = (e) => {
        setUserName(e.target.value)
    }
    const onClickHandler = async () => {
        setFollowers([])
        let responce = await fetch(`https://api.github.com/users/${useName}`)
        responce = await responce.json()
        setData(responce)
        console.log(responce);

    }
    const onFollowerHandler = async () => {
        let responce = await fetch(data.followers_url)
        responce = await responce.json()
        setFollowers(responce)
        console.log(responce);
    }
  return (
    <div>
      <label htmlFor="username">Enter user Name: </label>
      <input type="text" onChange={onChangehandler} />
      <button onClick={onClickHandler}>Search</button>
      <hr/>

      {data && 

      <div>
      <h1>Github user</h1>
      <img src={data.avatar_url} width={100}  alt="" />
      <span>bio: {data.bio} - Followers: {data.followers} </span><br/>

      <button onClick={onFollowerHandler}>Get Followers</button>
      </div>
    }

    {followers.length > 0 &&
      
      <table>
        <tr>
          <th>Id</th>
          <th>Avatar</th>
          <th>Name</th>
          <th>Type</th>
        </tr>

        {
            followers.map((follower, index) =>{
                return (
                <tr key={index}>
                <td>{follower.id}</td>
                <td><img src={follower.avatar_url} width={100}  alt="" /></td>
                <td>{follower.login}</td>
                <td>{follower.type}</td>
                </tr>
            )}
            )
        }
        
      </table>

    }
    </div>
  )
}
