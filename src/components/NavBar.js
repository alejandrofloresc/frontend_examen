import React, { useState } from "react";



const NavBar = ({newLocation}) => {

    const [ciudad, setCiudad] = useState("");
    const dato = (e) => {
        e.preventDefault();
        newLocation(ciudad);
    }
    return (
<nav className="navbar navbar-dark bg-light text-dark mb-5" > 

        <div className="container-fluid">
        <h3 className="navbar-brand text-dark">Frontend - Examen</h3>



            <form className="d-flex mt-2" onSubmit={dato}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search" onChange={(e) => setCiudad(e.target.value)} />
                    <button className="btn btn-primary input-group-text" type="submit">Search</button>
                </div>
            </form>
        </div>

        </nav>


    );


}

export default NavBar;