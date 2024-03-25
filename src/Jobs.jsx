import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Jobinfo from "./Jobinfo";

const Jobs = () => {
     
    // const jobs = useLoaderData();

    // const id = useParams();
    // const idInt = parseInt(id);
    // const job = jobs.find( job => job.id === idInt )
    // console.log(job)

    
     const [info, setInfo] = useState([]);


     useEffect( () => {
        
      fetch('jobs.json')
      .then(res => res.json())
      .then(data => setInfo(data))

     } , [])




    return (
        <div>
            <h1>job {info.length} </h1>
            

           {

              info.map( info => <Jobinfo  key={info.id} info={info} ></Jobinfo>  )


           }
  

        </div>
    );
};

export default Jobs;