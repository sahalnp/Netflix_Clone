import React, { useEffect } from "react";
import { useUser } from "../hooks/Context";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export const Navbar = () => {
    const { user, loading } = useUser();
    const name = localStorage.getItem("name") || "User";
    const navigate = useNavigate();

    // Uncomment if you want to redirect to login when user is not authenticated
    // useEffect(() => {
    //     if (!loading && !user) {
    //         navigate("/login");
    //     }
    // }, [user, loading, navigate]);

    const logout = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem("auth");
            localStorage.removeItem("email");
            localStorage.removeItem("user");
            localStorage.removeItem("name");
            navigate("/login");
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (
        <header className="header" id="header">
            <div className="navbar-container">
                <a href="#home" className="logo">NETFLIX</a>
                
                <nav className="nav-center">
                    <ul className="nav-links">
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#trending">Movies</a>
                        </li>
                    </ul>
                </nav>

                <div className="nav-right">
                    <div className="user-info">
                        <span className="user-name">{name}</span>
                        <button className="logout-btn" onClick={logout}>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};