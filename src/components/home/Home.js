import React, {useState} from "react";
import "./home.css";
import Weather from "../WEATHER/weather";

// Home function component with HandleLogout function passed from App.js and displaying the weather details.
const Home = ({handleLogout}) => {
    const [location, setlocation] = useState("");
    const [entered, setentered] = useState(false);
    const handleentered=()=>{
        setentered(false);
    }
    return (
        <div className="home-container">
            <nav class="navbar navbar-expand-lg navbar-dark shadow-5-strong ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">WeatherZone</a>
                    <button
                    class="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <i class="fas fa-bars"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        </li>
                    </ul>
                    </div>
                    <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"  />
                    <button class="btn btn-outline-success" type="submit" >Search</button>
                    </form>
                    <button class="btn btn-outline-success" type="submit" onClick={handleLogout}>Logout</button>
                </div>
            </nav>
            {entered ? (
                <Weather handleentered={handleentered} place="India"/>
            ):(
                <div>
                <input
                type="text"
                autoFocus
                required
                value={location}
                onChange={(e) => setlocation(e.target.value)}
                />
                console.log(location);
                <div className="btnContainer">
                    <button className="btn btn-primary" onClick={setentered(true)}>
                        Sign In
                    </button>
                </div>
            </div>
            )}
        </div>
    );
}

export default Home;   