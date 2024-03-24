import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>


            <h1 className=" text-5xl font-extrabold mt-10 text-center">OOPS!!!</h1>

            <Link className=" text-3xl font-extrabold mt-10 btn p-1 text-center"   >  GO to Home</Link>
            
        </div>
    );
};

export default ErrorPage;