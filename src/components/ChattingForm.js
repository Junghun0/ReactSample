import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FileUpload from './FileUpload';
import SendButton from './SendButton';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#565964',
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function ChattingForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Grid container spacing={3}>
        <Grid item xs>
            <FileUpload className={classes.paper}/>
        </Grid>
        <Grid item xs={8}>
            <TextField
            className={classes.paper}
            label="Send Message.."
            variant="outlined"/>
        </Grid>
        <Grid item xs>
            <SendButton className={classes.paper}/>
        </Grid>
      </Grid> */}
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <FileUpload/>
          </Paper>
        </Grid>
        <Grid item xs = {6}>
          <Paper className={classes.paper}>
          <TextField
            style={{width:"100%"}}
            label="Send Message.."
            variant="outlined"/>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <SendButton/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}




{/* <div style={{ backgroundColor: "#404348" , flexGrow:"1"}}>
        <div style={{ backgroundColor: "#565964",width: "100%"}}>

        <Grid style={{containerSpacing:"3"}}>
        <Grid>
        <FileUpload/>
        </Grid>
        <Grid item xs={9}>
        <TextField
            style={{ backgroundColor: "#565964", margin: "5px" }}
            label="Send Message.."
            variant="outlined"
            id="mui-theme-provider-outlined-input"
          />
        </Grid>
        <Grid>
        <SendButton/>
        </Grid>
        </Grid>
        </div>
      </div> */}