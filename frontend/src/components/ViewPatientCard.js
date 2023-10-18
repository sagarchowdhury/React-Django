import React from 'react';

const Sdata=[
    {
        firstname: "asma",
        lastname: "zahid",
        email: "a@gmail.com",
        gender:"female",
        username: "asma123",
       },
       {
        firstname: "naveen",
        lastname: "M",
        email: "n@gmail.com",
        gender:"female",
        username: "naveen123",
    }]

function ViewPatientCard(props){
    const handleClick=(e)=>{
        console.log(e.id);
        console.log(e)
        localStorage.setItem('id', e.id);
    };
    return(
    <>
    <link rel="stylesheet" href="css/CardStyle.css" />
        <div className="cards">
            <div className="card">
                <div>
                    <span className="card_info">{props.firstname}</span>
                   <div><span className="card_info">{props.email}</span></div> 
                    <div><span className="card_info">{props.gender}</span></div>
                    <span className="card_info">{props.username}</span></div>
                    <a href="/payment" target="_blank">
                        <button onClick={handleClick.bind(this,props)}  className=".btn-default">Add Payment</button>
                    </a>
                </div>
            </div>
    </>
    );
  };

  export default ViewPatientCard;
  export {Sdata};