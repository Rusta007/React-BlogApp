import React from 'react';
import HData from './TData';




function Hshow(props){
    return<>
        <div className='block' style={{margin:"0px 0px 0px 20px"}}>
        <a href='./home'>
        <img src={props.img} alt="image" height={"200px"} width={"300px"} /></a>
        <h1 className='heading' style={{marginBottom:"0px"}} >{props.name1}</h1>
        <p>{props.detail}</p>
        <p className=''><span className='title'>Day of Visit </span>{props.contact}</p>
        
        
        </div>
   
       
    
      
      
  
 
  
   
      
   
       
       
        </>
}

export default Hshow;
