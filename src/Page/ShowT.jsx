import React from 'react';
import TData from './TData';




function ShowT(props){
    return<>


    <div className='box'>
    <div className='container'>
        <img src={props.img} alt="image" height={"200px"} width={"250px"} />
     <div className='details'>
        <h1 className='heading'>{props.name1}</h1>
        <p>{props.detail}</p>
        <p className=''><span className='title'>Day of Visit </span>{props.contact}</p>
        </div>
      
    </div>
    <hr />
    </div>
 
  
   
      
   
       
       
        </>
}

export default ShowT;

