import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Card,{Sdata} from "./Card";
import axios from 'axios';

function Doctors(){
  const [Data,setData]=useState(null)

    const url='http://127.0.0.1:8000/api/doctor'
    
    let content=null
    let list = []
    useEffect(()=>{
        axios.get(url)
        .then(response=>{
            setData(response.data)
        })
       
    }, [url])
    if(Data){
      for(let i=0; i<Data.length;i++)
      {
        list.push(Data[i])
      }
  }

    
    return(
        <>
        <h1 className="heading_style">Doctors list</h1>

        {list.map((val,index) =>{
          return(
            <Card
              img="img/doctor.jpg"
              name={val.FirstName+val.LastName}
              spe={val.Email}
              add={val.Gender}
              time={val.Address}
              fee={val.ContactNO}
            />
          );
        })}
      </>
    );
  };

export default Doctors;