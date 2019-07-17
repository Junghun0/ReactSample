import React, { Component } from "react";
import InputBase from "@material-ui/core/InputBase";
import SendButton from "./SendButton";
import Container from "@material-ui/core/Container";
import { flexbox } from '@material-ui/system';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { spacing } from '@material-ui/system';
import FileUpload from './FileUpload';
import Box from '@material-ui/core/Box';

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
        
    },
    inputbox:{
        width: '100%',
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
            <flexbox justifyContent="flex-start">
            <FileUpload/>
            </flexbox>
            
            <flexbox justifyContent="center" width="90%">
            <InputBase/>
            </flexbox>
            
            <flexbox justifyContent="flex-end">
            <SendButton/>
            </flexbox>
            
          </flexbox>
        </flexbox>
        <div style={{ width: '100%' }}>
      <Box display="flex" p={1} bgcolor="background.paper">
        <Box p={0.5} bgcolor="grey.300" alignContent="center">
          <FileUpload/>
        </Box>
        <Box p={1} flexGrow={1} bgcolor="grey.500" alignContent="center">
          <InputBase/>
        </Box>
        <Box p={1}  bgcolor="grey.300" alignContent="center">
          <SendButton/>
        </Box>
      </Box>
    </div>
      </div>
    );
  }
}

ChatInput.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(ChatInput);
