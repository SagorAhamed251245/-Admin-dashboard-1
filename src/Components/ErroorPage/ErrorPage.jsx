import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center">
            <h1 className="text-5xl font-bold">This Page is Not Complete Yet</h1>
            <p>Go to  <Link to='/' className="text-blue-500">DashBoard</Link></p>
        </div>
    );
};

export default ErrorPage;