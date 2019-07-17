import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import axios from "axios";

const styles = theme => ({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%',
    },
    submit: {
    },
});

class SignIn extends Component{

  constructor(props){
    super(props);
    this.state = {
      userId: "",
      userPassword: ""
    }
  }
  
  handleChange = event => {
    this.setState({ userId: event.target.value });
    console.log('value1',event.target.value);
  }

  handleChange2 = event => {
    this.setState({ userPassword: event.target.value });
    console.log('value2',event.target.value);
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      userId: this.state.userId,
      userPassword: this.state.userPassword,
    };

    axios.post('http://localhost:8080/signin', { user , header: {
      'Content-Type': 'application/json'
    }
  })
      .then(res => {
        console.log(res);
      })
  }

  render(){
      const { classes } = this.props;

      return(
          <Container component="main" maxWidth="xs" style={{marginTop: '20%'}}>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoFocus
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={this.handleChange2}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Link to="/Home">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  // onClick={this.handleSubmit}
                  className={classes.submit}
                >
                Sign In
              </Button>
              </Link>
              <Grid container>
                <Grid item xs>
                  {/* <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link> */}
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
            
          </Box>
        </Container>
      );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);
