import React, { useEffect, useState } from "react";
import Task from "./Task";

function Home() {
    // Yeh local storage se tasks ko fetch karta hai. A
    // gar local storage mein tasks stored hain, toh unhe parse karke initial state set karta hai, warna empty array set karta hai.

  const initaileffect = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  const [tasks, settasks] = useState(initaileffect);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

//   form ke submit hone pr call hota h ye aur new task(title,decription )ko ass krta h 
  const submithandler = (e) => {
    e.preventDefault();
    settasks([
      ...tasks,
      {
        title,
        description,
      },
    ]);
    // ye update krta h 
    settitle("");
    setdescription("");

    console.log(title, description);
  };
//   useEffect hook tasks state mein koi change hone par local storage ko update karta hai.

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const deletetask = (index) => {
    const filteredarr = tasks.filter((val, i) => {
      return i !== index;
    });
    settasks(filteredarr);
  };

  return (
    <div className="container">
      <h1>DAILY GOALS</h1>
      <form onSubmit={submithandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <textarea
          value={description}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        >
          Description
        </textarea>
        <button type="submit">ADD</button>
      </form>
      {tasks.map((item, index) => (
        <Task
          key={index}
          title={item.title}
          description={item.description}
          deletetask={deletetask}
          index={index}
        />
      ))}
      {/* {tasks.map(()=>{
            yha hme return krna pdhta
         })} */}
    </div>
  );
}

export default Home;
