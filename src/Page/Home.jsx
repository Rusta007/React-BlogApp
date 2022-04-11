import React from 'react';
import { Link } from 'react-router-dom';
import TData from './TData';
import Hshow from './Hshow';
import Top from './Top';
import HData from './HData';
import Article from './Article';

function data(data){
    return( <Hshow
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

function Home() {


    return ( 
        <>
        <div style={{display:"grid" , gridTemplateColumns:"4fr 1fr" , marginRight:"20px"}}>
        <div>
            <h1 >Home</h1>

        <Link to="fitness">
           <img src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/7_most_effective_exercises_slideshow/webmd_photo_of_trainer_walking_on_treadmill.jpg?resize=652px:*&output-quality=75" width={"70%"} height={"80%"} style={{ borderRadius:"20px", marginTop:"0px"}} /></Link>
            
        </div>
        <div style={{marginLeft:"-275px"}}>
            <Link to='tourism' ><img src="https://media.istockphoto.com/photos/young-woman-kayaking-through-the-backwaters-of-monroe-island-picture-id1031430214?b=1&k=20&m=1031430214&s=170667a&w=0&h=relNFqRscMdgLsH4hZhTKjOLFgjcvfAPKjv6-TOL4Q8=" width={"300px"} height={"230px"} style={{borderRadius:"20px",marginTop:"73px", marginBottom:"-10px"}} /></Link>
        
            <Link to='bollywood' ><img src="https://lumiere-a.akamaihd.net/v1/images/pp_maleficentmistressofevil_herobanner_mobile_19736_0a0e1915.jpeg"  width={"300px"} height={"210px"} style={{borderRadius:"20px"}}/></Link>
                
           

        </div>

        <div style={{marginTop:"-30px"}}>
            <div><h1>The Latest</h1></div>
           
            <div style={{display:"flex" , marginLeft:"50px" }}>
            
            {HData.map(data)}
            </div>
       
        </div>

       

      </div>

      <div>
            <div><h1>Lateset Article</h1></div>
            <div>
              
               <Article />
             
            </div>

        </div>

        <div style={{marginTop:"30px"}}>
            <div><h1>Latest Stories</h1></div>
           
            <div style={{display:"flex" , marginLeft:"50px" }}>
            
            {HData.map(data)}
            </div>
       
        </div>


        </>
        );
}

export default Home;
