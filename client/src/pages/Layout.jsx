/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../sections/navbar/Navbar";
// import { UserContext } from "../contexts/UserContext";

const Layout = () => {
    const scrollToAboutMe = useRef(null);
    const scrollToProjects = useRef(null);
    const scrollToContact = useRef(null);

    //   const { user, setUser } = useContext(UserContext);

    //   const navigate = useNavigate();

    //   const handleLogOut = () => {
    //     if (confirm("Are you sure you want to log out?")) {
    //       setUser({
    //         name: null,
    //         email: null,
    //       });

    //       localStorage.removeItem("email");
    //       localStorage.removeItem("webToken");

    //       navigate("/");
    //     }
    //   };

    return (
        <>

            <Navbar
                scrollToAboutMe={scrollToAboutMe}
                scrollToProjects={scrollToProjects}
                scrollToContact={scrollToContact}
            />

            <main className="pt-16 items-center w-full h-full">
                <Outlet />
            </main>
        </>
    );
};

export default Layout;