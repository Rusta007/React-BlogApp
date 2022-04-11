import React from 'react';
import TData from './TData';



function Top(props) {
    return <>
 <div  className='box1'>
    
  <div className='container'>
  <img src={props.img} alt="image" height={"100px"} width={"150px"} />
  <span className=''>
     <h3 className='heading'>{props.name1}</h3>
     <p className=''><span className='title'>Tourism </span>{props.contact}</p>
     </span>
  </div>
  </div>
  <hr />
    </>
}

export default Top;