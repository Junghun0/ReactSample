import React, { Component } from "react";
import InputBase from "@material-ui/core/InputBase";
import SendButton from "./SendButton";
import Container from "@material-ui/core/Container";
import { flexbox } from '@material-ui/system';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { spacing } from '@material-ui/system';
import FileUpload from './FileUpload';

const styles = theme => ({
    box: {
      backgroundColor: '#181A1C',
      flexDirection: 'column',
      justifyContent: 'center',
      display: 'flex'
    },
    centerbox:{
        justifyContent: 'center',
        display: 'flex'
    },
    input: {
        $inputHeight: 42,
        width: 100,
        height: 100,
    },
    inputbox:{
        alignItems: 'baseline',
        backgroundColor: '#f5f5f5',
        flexDirection: 'row',
        display: 'flex',
    },
});

class ChatInput extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <flexbox claaName={classes.box}>
          <flexbox className={classes.centerbox} style={{height: "350px", width: "100%"}}>
            <Container style={{backgroundColor: '#232529', height: "100%", width: "100%"}}>
                <Container style={{backgroundColor: '#262626', height:"100%", width: "80%"}}>
                    
                </Container>
            </Container>
          </flexbox>
          <flexbox className={classes.inputbox}>
            <FileUpload/>
            <InputBase className={classes.input} autoFocus={true} style={{width: "90%", height: "60%", backgroundColor: "#c7c7c7"}}/>
            <SendButton/>
          </flexbox>
        </flexbox>
      </div>
    );
  }
}

ChatInput.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(ChatInput);
