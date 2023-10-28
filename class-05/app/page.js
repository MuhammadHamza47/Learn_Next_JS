"use client";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const userNames = ["Hamza", "Huzaifa", "Saad", "Abbas", "Ahsan", "Hassan"];
  const [data, setData] = useState([]);
  const [students, setStudents] = useState([
    {
      name: "Hamza",
      rollNo: 21,
      section: "A",
    },
    {
      name: "Huzaifa",
      rollNo: 22,
      section: "C",
    },
    {
      name: "Saad",
      rollNo: 23,
      section: "D",
    },
    {
      name: "Abbas",
      rollNo: 42,
      section: "B",
    },
    {
      name: "Ahsan",
      rollNo: 34,
      section: "D",
    },
    {
      name: "Hassan",
      rollNo: 26,
      section: "E",
    },
  ]);

  const deleteHandler = (e) => {
    let restStudent = students.filter((item) => {
      if (item.rollNo !== e) {
        return item;
      }
    });
    setStudents(restStudent);
  };

  const loadDataFromServer = async () => {
    // let responce = await  fetch("https://api.github.com/users/naveed-rana");
    // responce = await responce.json();
    let responce = await axios.get("https://api.github.com/users/naveed-rana");
    setData(responce.data);
    console.log("responce", responce.data);
  };

  return (
    <>
      <h1>Github Name: {data.name} - followers: {data.followers}</h1>
      <h3>Public Repo: {data.public_repos}</h3>
      <h3>Followers url: {data.followers_url}</h3>
      {/* { */}
        {/* data?.map((item, i)=>{ */}
          {/* return( */}
            {/* <div key={i}> */}
              {/* <h1>Github Name: {item.login} - followers: {item.id}</h1> */}
              {/* <h3>Follo</h3> */}
            {/* </div> */}
          {/* ) */}
        {/* }) */}
      {/* } */}
{/*  */}
      <button onClick={loadDataFromServer}>Load Data</button>
      {/*     
      {userNames.map((item, i) => {
        return (
          <div key={i}>
            <h1>Hello! Welcome to {item} </h1>
            <hr />
          </div>
        );
      })
      }
 */}

      {/*       
      {students.map((item, i) => {
        return (
          <div key={i}>
            <h1>Student Name: {item.name} </h1>
            <h2>Roll No: {item.rollNo} </h2>
            <h3>Section: {item.section}</h3>
            <hr />
          </div>
        );
      })
      } */}

      <table>
        <tr>
          <th>Name</th>
          <th>Roll No</th>
          <th>Section</th>
          <th>Action</th>
        </tr>
        {students.map((item, i) => {
          return (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.rollNo}</td>
              <td>{item.section}</td>
              <td>
                <button onClick={() => deleteHandler(item.rollNo)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
}
