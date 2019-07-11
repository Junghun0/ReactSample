import React, { Component } from "react";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import SaveIcon from "@material-ui/icons/Save";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Input } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import axios, { post } from "axios";

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit
    this.fileUpload(this.state.file).then(response => {
      console.log(response.data);
    });
  }

  fileUpload(file) {
    const url = "http://example.com/file-upload";
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    return post(url, formData, config);
  }

  onChange(e) {
    this.setState({ file: e.target.files[0] });
    console.log(e.target.files[0]);
    console.log(e.target.files[0].name);
  }

  render() {
    return (
      <div>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography component="div">
            <form onSubmit={this.onFormSubmit}>
              <input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                onChange={this.onChange}
                style= {{display: "none"}}
              />

              <label htmlFor="contained-button-file">
                <IconButton
                  style={{
                    backgroundColor: "#ffffff",
                  }}
                  variant="contained"
                  component="span"
                  className="button"
                  type="submit"
                >
                  <CloudUploadIcon className="rightIcon" />
                </IconButton>
              </label>
            </form>
          </Typography>
        </Container>
      </div>
    );
  }
}

export default FileUpload;
