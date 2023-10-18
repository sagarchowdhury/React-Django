import React from 'react';

const Sdata=[
        {
            date:"20-12-2021",
            STime:"2:30 PM",
            ETime:"4:00 PM",
            PatientName:"Eliot Bowater",
            PatientGmail:"fpoate0@sciencedirect.com",
            PatientContactNo:"188-311-7183",
            DoctorName:"DR. Fonz Poate",
            DoctorGmail:"FonzPoate@gmail.com",
          
        },
        {
            date:"16-2-2021",
            STime:"11:40 AM",
            ETime:"1:00 PM",
            PatientName:"Ellary Scranny",
            PatientGmail:"fillingsworth1@ning.com",
            PatientContactNo:"168-584-2658",
            DoctorName:"DR. Fredek Illingsworth",
            DoctorGmail:"FredekIllingsworth@gmail.com",
        },
        {
            date:"21-5-2022",
            STime:"9:45 PM",
            ETime:"11:00 PM",
            PatientName:"Victor Graveney",
            PatientGmail:"agorini2@icio.us",
            PatientContactNo:"984-531-0965",
            DoctorName:"DR. Arron Gorini",
            DoctorGmail:"ArronGorini@gmail.com",
        },
        {
            date:"2-3-2022",
            STime:"5:30 PM",
            ETime: "6:15 PM",
            PatientName:"Kaycee Statefield",
            PatientGmail:"cmaroney3@springer.com",
            PatientContactNo:"984-531-0965",
            DoctorName:"DR. Cordie Maroney",
            DoctorGmail:"CordieMaroney@gmail.com",
        },
        {
            date:"29-1-2022",
            STime:"8:30 AM",
            ETime:"10:00 AM",
            PatientName:"Brantley Ion",
            PatientGmail:"wdevey4@fotki.com",
            PatientContactNo:"121-988-7617",
            DoctorName:"DR. Wat Devey",
            DoctorGmail:"WatDevey@gmail.com",
        },
        {
            date:"4-12-2022",
            STime:"10:00 AM",
            ETime:"12:15 PM",
            PatientName:"Lazaro Broadey",
            PatientGmail:"fblackborn5@flickr.com",
            PatientContactNo:"121-988-7617",
            DoctorName:"DR. Fletch Blackborn",
            DoctorGmail:"FletchBlackborn@gmail.com",
        },
        {
            date:"2-3-2022",
            STime:"1:15 PM",
            ETime:"2:00 PM",
            PatientName:"Jaine Mor",
            PatientGmail:"gfirk6@moonfruit.com",
            PatientContactNo:"801-982-6537",
            DoctorName:"DR. Galina Firk",
            DoctorGmail:"GalinaFirk@gmail.com",
        }
]

function AppoinmtmentCard(props){
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
                    <span className="card_title">{props.DoctorName}</span>
                    <h6 className="card_info1">{props.DoctorGmail}</h6>
                    <h6 className="card_info1">{props.PatientName}</h6>
                    <h6 className="card_info1">{props.PatientGmail}</h6>
                    <h6 className="card_info1">{props.PatientContactNo}</h6>
                    <h6 className="card_info1">{props.date}</h6>
                    <h6 className="card_info1">{props.STime}</h6>
                    <form action="cancelAppointment" method="post">
                    <input type="hidden" name="id" value={props.id}/>
                    
                    <button onSubmit={onSubmits} className=".btn-default">Cancel Appointment</button>

                    </form>
                </div>
            </div>
        </div>
    </>
    );
  };

  export default AppoinmtmentCard;
  export {Sdata};