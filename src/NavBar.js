import React, { useContext } from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import UserContext from "./auth/UserContext";

function NavBar({ logout }) {
    const { currentUser } = useContext(UserContext);

    function loggedInNav() {
        return (
            <div className="navbar-wrapper">
                <NavLink to="/" className="navbar">Home</NavLink>
                <NavLink to="/profile" className="navbar">Profile</NavLink>
                <NavLink to="/saltwaterfish" className="navbar">SaltwaterFish</NavLink>
                <NavLink to="/freshwaterfish" className="navbar">FreshwaterFish</NavLink>
                <NavLink to="/coral" className="navbar">Coral</NavLink>
                <Link className="navbar" to="/" onClick={logout}>Log out</Link>
            </div>
        );
    }
    function loggedOutNav() {
        return (
            <div className="navbar-wrapper">
                <NavLink exact to="/" className="navbar">Home</NavLink>
                <NavLink to="/signup" className="navbar">Sign Up </NavLink>
                <NavLink to="/login" className="navbar">Login </NavLink>
            </div>
        );
    }
    return (
        <div>
            <Link to="/"></Link>
            {currentUser ? loggedInNav() : loggedOutNav()}
        </div>
    );
}
export default NavBar;