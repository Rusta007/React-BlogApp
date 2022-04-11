import React from 'react';
import FitData from './FitData';
import ShowT from './ShowT';
import TData from './TData';
import TechData from './TechData';
import Top from './Top';

function data(data){
    return( <ShowT 
        img = {data.img}
    name1 = {data.name1}
    detail = {data.detail}
    contact = {data.contact}


     />
     
    )


}


function data1(data){
    return(
        <Top
        img = {data.img}
        name1 = {data.name1}
        contact = {data.contact}

        />
    )
}

function Tech() {


    return ( 
        <>
        <div style={{display:"grid" , gridTemplateColumns:"4fr 1fr" , marginRight:"20px"}}>
        <div>
            <h1>Technology</h1>
            {TechData.map(data)}
        </div>
        <div style={{marginLeft:"-120px"}}>
            <h1>Top Most</h1>
            {TechData.map(data1)}
            <p className='adver' >
                <marquee><h2>Advertising</h2></marquee>
                <img src='https://learn.releasemyad.com/wp-content/uploads/2020/12/Times-Interact.png' style={{width:"90%", height:"85%", marginTop:"-20px"}} alt="Advertising" />
            </p>
        </div>


      </div>
        </>
        );
}

export default Tech;