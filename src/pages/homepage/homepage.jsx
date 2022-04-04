import "./homepage.css";
import { Link } from "react-router-dom";
export const Homepage = () => {
    return(
<div className="homepage-container">
<div>
    <img class="img-fluid" src="/asset/sapiens.svg" alt="homepage-svg"/>
</div>
<div className="information">
    <h1 className="pt-5">RE-VISE</h1>
    <h3 className="pt-5">Meet your modern</h3>
    <h4 className="pt-2">Note Taking App</h4>
    <p className="py-5">Manage your daily tasks and workflow in a modern way and boost your efficiency without any efforts.</p> 
    <Link to="/login">
    <button class="btn btn-primary mt-2">Join Now</button>
    </Link>
    <Link to="/signUp">
    <p>Already have an account ?</p>
    </Link>
    </div>
</div>

    )
}