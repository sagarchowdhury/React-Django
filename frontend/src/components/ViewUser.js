import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card,{Sdata} from "./ViewUserCard";



function ViewUser(){
  const [Data,setData]=useState(null)

    const url='http://127.0.0.1:8000/api/user'
    
    let content=null
    let list = []
    useEffect(()=>{
        axios.get(url)
        .then(response=>{
            setData(response.data)
        })
       
    }, [url])
    if(Data){
      console.log(Data.length)
      for(let i=0; i<Data.length;i++)
      {
        list.push(Data[i])
        console.log(Data[i])
      }
      content= Data[0].FirstName  
      console.log(list)
      console.log("Sdata.........")
      console.log(Sdata)
  }

    
    return(
        <>
        <h1 className="heading_style">User List</h1>

        {list.map((item,index) =>{
          return(
            <Card
                  PatientName={(item.FirstName)+(item.LastName)}
                  PatientGmail={item.Email}
                  PatientContactNo={item.ContactNO}
                  Type={item.Type}
                  id={item.id}
                  gender={item.Gender}
                  link={item.link}
            />
          );
        })}
      </>
    );
  };

 export default ViewUser;