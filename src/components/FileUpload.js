import React, {Component} from "react";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import SaveIcon from "@material-ui/icons/Save";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {Input} from "@material-ui/core";
import './FileUpload.css';
import axios, { post } from 'axios';


class FileUpload extends Component {

    constructor(props) {
        super(props);
        this.state ={
            file:null
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
    }

    onFormSubmit(e){
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state.file).then((response)=>{
            console.log(response.data);
        })
    }

    fileUpload(file){
        const url = 'http://example.com/file-upload';
        const formData = new FormData();
        formData.append('file',file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return  post(url, formData,config)
    }

    onChange(e) {
        this.setState({file:e.target.files[0]});
        console.log(e.target.files[0]);
        console.log(e.target.files[0].name);
    }

    render() {
        return (
            <div>
                <React.Fragment>
                    <CssBaseline/>
                    <Container maxWidth="sm">
                        <Typography
                            component="div"
                            style={{backgroundColor: "#cfe8fc", height: "60vh"}}>

                            <form onSubmit={this.onFormSubmit}>
                                <input
                                    accept="image/*"
                                    className="input"
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    onChange={this.onChange}/>

                                <label htmlFor="contained-button-file">
                                    <Button
                                        style={{backgroundColor: "#7bffd0", marginTop: "20px", width: "100%"}}
                                        variant="contained"
                                        component="span"
                                        className="button"
                                        type="submit">
                                        Upload
                                        <CloudUploadIcon className="rightIcon"/>
                                    </Button>
                                </label>
                            </form>
                            <Button
                                style={{marginBottom: "20px", marginTop: "20px", backgroundColor: "#7bffd0", width: "100%"}}
                                variant="contained"
                                component="span"
                                className="button">
                                <KeyboardVoiceIcon className="rightIcon"/>
                                Talk
                            </Button>
                            <Button
                                style={{backgroundColor: "#7bffd0", width: "100%"}}
                                variant="contained"
                                size="small"
                                className="button">
                                <SaveIcon className={clsx("leftIcon", "iconSmall")}/>
                                Save
                            </Button>
                        </Typography>
                    </Container>
                </React.Fragment>
            </div>
        );
    }
}

export default FileUpload;
