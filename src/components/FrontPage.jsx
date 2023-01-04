import React,{Component} from 'react';
import Button from "@mui/material/Button";
import logo from "../logo.svg";
import FileUploadPage from "./FileUploadPage";

class FrontPage extends Component{

    render() {
        return (
            <div>
                <div className="container">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Click on the button below to upload your file!
                    </p>

                    <Button variant="contained" component="label" onClick={this.state && <FileUploadPage />}>
                        Upload file menu >
                    </Button>
                </div>
            </div>
        );
    }
}

export default FrontPage;