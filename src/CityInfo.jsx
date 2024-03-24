

const CityInfo = ({cityIN}) => {

      const {images, city, location, type, best_company } = cityIN

    return (
        <div>

             <div>



             <div className="card w-[400px] bg-base-100 shadow-xl border-[1px] border-violet-600 ">
             <figure className="px-10 pt-10">
               <img src={images} alt="Shoes" className="rounded-xl h-[200px]" />
             </figure>
             <div className="card-body items-center text-center">
               <h2 className="card-title text-2xl font-extrabold"> city: {city}  </h2>
               <p className=" text-xl font-extrabold text-slate-400"> Location: {location} </p>
               <p className=" text-xl font-extrabold  text-violet-500" > type: {type} </p>
               <p className=" text-xl font-extrabold text-blue-400" > Companies: {best_company}  </p>
               <div className="card-actions">
                 <button className="btn bg-violet-600 text-white">View details</button>
               </div>
             </div>
            </div>

















             </div>

            
        </div>
    );
};

export default CityInfo;