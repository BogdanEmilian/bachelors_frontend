import axios from 'axios';
import React, {Component} from 'react';
import Button from "@mui/material/Button";

class FileUploadPage extends Component{

    state = {

        //Init with no file selected
        selectedFile: null
    };

    //On file selected change state
    onFileChange = event => {

        //Update the state
        this.setState({ selectedFile: event.target.files[0] });

    };

    //On file upload button interaction
    onFileUpload = () => {

        const formData = new FormData();

        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        //Details of the uploaded file
        console.log(this.state.selectedFile);

        //TODO
        //POST request to the backend API
        axios.post("api/uploadfile", formData);
    };

    //File content is displayed after upload is done
    fileData = () => {

        if (this.state.selectedFile) {

            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {this.state.selectedFile.name}</p>

                    <p>File Type: {this.state.selectedFile.type}</p>

                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>

                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };

    render() {

        return (
            <div>
                <h1>
                    Choose a file to upload on the blockchain
                </h1>
                <div>
                    <input type="file" onChange={this.onFileChange} />
                </div>
                <div>
                    <Button variant="Contained" onClick={this.onFileUpload}>Upload</Button>
                </div>
                {this.fileData()}
            </div>
        );
    }
}

export default FileUploadPage;
