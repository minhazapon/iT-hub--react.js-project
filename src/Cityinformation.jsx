import { useEffect } from "react";
import { useState } from "react";
import CityInfo from "./CityInfo";


const Cityinformation = () => {


    const [cityIN, setCity] = useState([])


    const [data, setData] = useState(3);

    useEffect( () => {

          fetch('tech.json')
          .then(res => res.json())
          .then(data => setCity(data))
   
    } , [])




    return (
        <div className=" ml-5 mr-5">
              
          <div>

              <div className=" text-center">

                <h1 className=" text-4xl font-extrabold text-violet-600">City Information  </h1>
                <p className=" mt-5 text-xl  text-slate-400">Any sufficiently advanced technology is indistinguishable from magic.</p>


              </div>


          </div>



          <div className=" grid md:grid-cols-3 gap-10 mt-10 ">

             {

               cityIN.slice(0 , data ).map( cityIN => <CityInfo key={cityIN.id} cityIN={cityIN} ></CityInfo> )


             }


          </div>


          <div className=" mt-10 mb-2 text-center">

            <button onClick={ () => setData(cityIN.length)  } className=" btn bg-violet-600 w-[100px] text-white font-bold">All City</button>

          </div>

        </div>
    );
};

export default Cityinformation;