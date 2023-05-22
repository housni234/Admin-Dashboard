import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "components/Navbar";
import Sidebar from "components/sidebar"


const Layout = () => {
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const [isSidebarOpen, setIssidebaropen] = useState(true);

    return (
        <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
            <Sidebar
                isNonMobile={isNonMobile}
                drawerWidth="250px"
                isSidebarOpen={isSidebarOpen}
                setIssidebaropen={setIssidebaropen}
            />
            <Box>
                <Navbar
                    isSidebarOpen={isSidebarOpen}
                    setIssidebaropen={setIssidebaropen}
                />
                <Outlet />
            </Box>
        </Box>
    )
}

export default Layout