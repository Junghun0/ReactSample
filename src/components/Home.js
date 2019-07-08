import React, { Component, useState } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems, thirdListItems } from './listItems';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import FileUpload from './FileUpload';
import LeftDrawer from './LeftDrawer';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
    },
    appBar: {
        backgroundColor: '#232529',
        // transition: theme.transitions.create(['width', 'margin'], {
        //     easing: theme.transitions.easing.sharp,
        //     duration: theme.transitions.duration.leavingScreen,
        // }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        // transition: theme.transitions.create(['width', 'margin'], {
        //     easing: theme.transitions.easing.sharp,
        //     duration: theme.transitions.duration.enteringScreen,
        // }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        // transition: theme.transitions.create('width', {
        //     easing: theme.transitions.easing.sharp,
        //     duration: theme.transitions.duration.enteringScreen,
        // }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        // transition: theme.transitions.create('width', {
        //     easing: theme.transitions.easing.sharp,
        //     duration: theme.transitions.duration.leavingScreen,
        // }),
    

    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        
    },
    paper: {
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    fab: {
        mx: 'auto'
    },
});

class Home extends Component{

    constructor(props) {
        super(props);

        this.state = {
            open: true
        };

        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    }

    handleDrawerOpen = () => {
        this.setState = {
            open: this.state.open
        }
    };

    handleDrawerClose = () => {
        this.setState = {
            open: !this.state.open
        }
    };

    render(){
        const { classes } = this.props;
        // const [open, setOpen] = useState(false);
        // const handleDrawerOpen = () => {
        //     setOpen(true);
        // };
        // const handleDrawerClose = () => {
        //     setOpen(false);
        // };
        const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    
        return(
            <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="Open drawer"
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                        onClick={this.handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Pixel
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            {/* Drawer Here */}
            <LeftDrawer/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>

                        <Grid item xs={12} md={8} lg={9}>
                            <Paper className={fixedHeightPaper}>

                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={4} lg={3}>
                            <Paper className={fixedHeightPaper}>

                            </Paper>
                        </Grid>

                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <FileUpload/>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
        );
    }
}
Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(Home);