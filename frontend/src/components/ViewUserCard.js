import React from 'react';

const Sdata=[
        {
            PatientName:"Eliot Bowater",
            PatientGmail:"fpoate0@sciencedirect.com",
            PatientContactNo:"188-311-7183",
            Type:"Doctor",
          
        },
        {
            PatientName:"Ellary Scranny",
            PatientGmail:"fillingsworth1@ning.com",
            PatientContactNo:"168-584-2658",
            Type:"Patient"
        },
        {
            PatientName:"Victor Graveney",
            PatientGmail:"agorini2@icio.us",
            PatientContactNo:"984-531-0965",
            Type:"Receptionist"
        },
        {
            
            PatientName:"Kaycee Statefield",
            PatientGmail:"cmaroney3@springer.com",
            PatientContactNo:"984-531-0965",
            Type:"Doctor"
        },
        {
            PatientName:"Brantley Ion",
            PatientGmail:"wdevey4@fotki.com",
            PatientContactNo:"121-988-7617",
            Type:"Doctor"
        }
]

function ViewUserCard(props){
    const onSubmits=(e)=>{
        e.preventDefault();
        alert("form submitted");
    };
    return(
    <>
    <link rel="stylesheet" href="css/CardStyle.css" />
        <div className="cards">
            <div className="card">
                <div>
                    <span className="card_title">{props.PatientName}</span>
                    <h6 className="card_info">{props.PatientGmail}</h6>
                    <h6 className="card_info">{props.PatientContactNo}</h6>
                    <h6 className="card_info">{props.Type}</h6>
                    <form action="deleteuser" method="post">
                    <input type="hidden" name="id" value={props.id}/>
                    
                    <button onSubmit={onSubmits} className=".btn-default">Delete User</button>

                    </form>
                </div>
            </div>
        </div>
    </>
    );
  };

  export default ViewUserCard;
  export {Sdata};