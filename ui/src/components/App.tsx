import React, { useState } from "react";
import { Breadcrumbs, Button } from '@mui/material';
import axios from 'axios'
import { Link, Outlet } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { updateName } from "../reducer/appActionCreators";

const App = () => {
    const dispatch = useDispatch();
    const getUserName = async () => {
        const response = await axios.get("/api/name")
        if(response){
            let flow = "from local node server"
            const path = window.location.pathname;
            if(path.startsWith("/static"))
                flow = "from express static"
            if(path.startsWith("/ssr"))
                flow = "from ssr"
            if(window.location.hostname.includes("vercel"))
                flow = "from cdn"
            if(path.includes("myfullstackapp.com"))
                flow = "from nginx proxy"
            dispatch(updateName(`${response.data.name}, ${flow}`))
        }
    }

    return (
        <>
            <Button onClick={getUserName}>Get name from server </Button>
            <Breadcrumbs separator="/">
                <Link to="/"> Home </Link>
                <Link to="/view"> View </Link>
                <Link to="/edit"> Edit </Link>
            </Breadcrumbs>
            <Outlet />
        </>
    )
}

export default App;