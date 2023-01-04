import React,{Component} from 'react';
import Button from "@mui/material/Button";
import logo from "../logo.svg";
import FileUploadPage from "./FileUploadPage";
import { useNavigate } from "react-router-dom";

function FrontPage() {

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = ``;
        navigate(path);
    }

    return (
        <div>
            <div className="container">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Click on the button below to upload your file!
                </p>

                <Button variant="contained" component="label" onClick={routeChange}>
                    Upload file menu >
                </Button>
            </div>
        </div>
    );
}

export default FrontPage;