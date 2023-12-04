import React, { useState } from "react";

function StudentCard({ img, name, batch, education ,acceptCount,setAcceptCount}) {
  // const name="swastic kumar"
  // const batch ="Batch49 WD2"
  // const education ="Btech civil engineering"

  const [show,setShow]=useState(true);

  function handleAccept(){
    setShow(!show)
    setAcceptCount(++acceptCount)
    // console.log("ACCEPT :",name,show)
  }
  function handleReject(){
    setShow(!show)
    setAcceptCount(--acceptCount)
    // console.log("REJECT :",name,show)
  }
// console.log(show)

  return (
    <>
      <div className="student-card">
        <img src={img} alt="iam" />
        <h3>{name}</h3>
        <p>{batch} (Tamil)</p>
        <p>{education}</p>
      {show ?   <button
          className="accept-btn btn"
          onClick={handleAccept}
        >
          Accept
        </button> : <button className="reject-btn btn"
        onClick={handleReject}>Reject</button>}
        
      </div>
    </>
  );
}

export default StudentCard;
