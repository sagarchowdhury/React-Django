import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaMoneyBillAlt } from 'react-icons/fa';


const Sdata=[
    {
      img:"img/doctor.jpg" ,
      name:"Dr. Name" ,
      spe: "Specialization",
      add:"Address",
      time:"Timing",
      fee:"Fee",
    },
    {
        img:"img/doctor.jpg" ,
        name:"Dr. Name" ,
        spe: "Specialization",
        add:"Address",
        time:"Timing",
        fee:"Fee",
      },
      {
        img:"img/doctor.jpg" ,
        name:"Dr. Name" ,
        spe: "Specialization",
        add:"Address",
        time:"Timing",
        fee:"Fee",
      },
      {
        img:"img/doctor.jpg" ,
        name:"Dr. Name" ,
        spe: "Specialization",
        add:"Address",
        time:"Timing",
        fee:"Fee",
      },
      {
        img:"img/doctor.jpg" ,
        name:"Dr. Name" ,
        spe: "Specialization",
        add:"Address",
        time:"Timing",
        fee:"Fee",
      },
      {
        img:"img/doctor.jpg" ,
        name:"Dr. Name" ,
        spe: "Specialization",
        add:"Address",
        time:"Timing",
        fee:"Fee",
      },
      {
        img:"img/doctor.jpg" ,
        name:"Dr. Name" ,
        spe: "Specialization",
        add:"Address",
        time:"Timing",
        fee:"Fee",
      },
      {
        img:"img/doctor.jpg" ,
        name:"Dr. Name" ,
        spe: "Specialization",
        add:"Address",
        time:"Timing",
        fee:"Fee",
      }
]

function Card(props){
    return(
    <>
    <link rel="stylesheet" href="css/CardStyle.css" />
        <div className="cards">
            <div className="card">
                <img className="card_img" src={props.img} alt="" /><br/><br/>
                <div>
                    <span className="card_title">{props.name}</span>
                    <h3 className="card_info">{props.spe}</h3>
                    <h6 className="card_info1"> <MdLocationOn />{props.add}</h6>
                    <h6 className="card_info1"><AiOutlineClockCircle />{props.time}</h6>
                    <h6 className="card_info1"><FaMoneyBillAlt/>{props.fee}</h6>
                    <a href="./appointment-form">
                        <button className="button1">Make Appointment</button>
                    </a>
                </div>
            </div>
        </div>
    </>
    );
  };

  export default Card;
  export {Sdata};