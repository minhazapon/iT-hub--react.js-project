

import '../public/images/company.png'
import '../public/images/machine.png'
import '../public/images/networking.png'
import '../public/images/techonloy.png'


const City = () => {
    return (
        <div className=' mt-10 mb-10'>
            
          <div >



            <div>
                <h1 className=' text-4xl font-extrabold text-violet-700 text-center'>Tech Hub</h1>
                <p className=' text-xl text-slate-400 text-center mt-5'>Any sufficiently advanced technology is indistinguishable from magic.</p>

            </div>




            <div className=' flex justify-center items-center gap-20 mt-10 flex-col md:flex-row lg: flex-row'>
                


             <div className=' border-[1px] border-violet-600 bg-pink-100 w-[140px] p-3 rounded-2xl'>
                <img className=' h-[70px]' src="../public/images/company.png" alt="" />
                <h1 className=' text-xl font-extrabold text-blue-600'>Company</h1>
                
             </div>

             <div className=' border-[1px] border-violet-600 bg-pink-100 w-[140px] p-3 rounded-2xl'>
                <img className=' h-[70px]' src="../public/images/machine.png" alt="" />
                <h1 className=' text-xl font-extrabold text-blue-600'>machine</h1>
                
             </div>

             <div className=' border-[1px] border-violet-600 bg-pink-100 w-[140px] p-3 rounded-2xl'>
                <img className=' h-[70px]' src="../public/images/networking.png" alt="" />
                <h1 className=' text-xl font-extrabold text-blue-600'>Networking</h1>
                
             </div>

             <div className=' border-[1px] border-violet-600 bg-pink-100 w-[140px] p-3 rounded-2xl'>
                <img className=' h-[70px]' src="../public/images/techonloy.png" alt="" />
                <h1 className=' text-xl font-extrabold text-blue-600'>Technology</h1>
                
             </div>



            </div>


          </div>
      
        </div>
    );
};

export default City;