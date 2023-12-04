import React, { useState } from "react";
import StudentCard from "./Components/StudentCard";
import "./App.css";
const App = () => {
  const [acceptCount,setAcceptCount]=useState(0);

  // map
  const studentsData = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_J4IeylQzW8W_6kSUF9c7seuRg757hfjyhejz6QFv&s",
      name: "Swastic",
      batch: "b45wd",
      education: "bsc",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_J4IeylQzW8W_6kSUF9c7seuRg757hfjyhejz6QFv&s",
      name: "Nivya",
      batch: "b44we",
      education: "msc",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_J4IeylQzW8W_6kSUF9c7seuRg757hfjyhejz6QFv&s",
      name: "Kumar",
      batch: "b55wd",
      education: "btech",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_J4IeylQzW8W_6kSUF9c7seuRg757hfjyhejz6QFv&s",
      name: "Sanjay",
      batch: "b54we",
      education: "mtech",
    },
  ];
  return (
    <div className="App">
      <div>
        <h1>Accepted Count : {acceptCount}</h1>
      </div>
      <div className="card-block">
      
        {studentsData.map((stud, idx) => (
          <StudentCard
            key={idx}
            img={stud.img}
            name={stud.name}
            batch={stud.batch}
            education={stud.education}
            acceptCount={acceptCount}
            setAcceptCount={setAcceptCount}
            // idx={idx}
          />
        ))}

        {/* <StudentCard
        img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_J4IeylQzW8W_6kSUF9c7seuRg757hfjyhejz6QFv&s"}
         name={'kumar'}
         batch={'b49'}
         education={'b.tech'}
        /> */}
        {/* <StudentCard/>
        <StudentCard/> */}
      </div>
    </div>
  );
};

export default App;
