import React, { Component, Fragment } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement, addBY } from '../../actions'


import {Container,Paper,Grid, Card, CardActionArea, CardActions, 
  CardContent, CardMedia, useScrollTrigger,Typography, Box,
  CssBaseline, Button, makeStyles, createMuiTheme, responsiveFontSizes} from '@material-ui/core';
  import { ThemeProvider } from '@material-ui/styles';
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop:theme.spacing(10), 
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(10),
    marginLeft:theme.spacing(1),
    marginRight:theme.spacing(1),
    borderRadius:0,
  },
  button: {
    margin: theme.spacing(1),
   
  },
  input: {
    display: 'none',
  },
  card: {
    marginTop: theme.spacing(10), 
    maxWidth: 345,
  },
  
  media: {
    height: 140,
    background: '#c38',
    border: 1,
    color: '#fff'
  },
  text: {
    padding:20,
  },
  heading:{
    withd:1,
    background:'primary'
  }
}));

function Body() {
  const classes = useStyles();
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();
        return (
          <Fragment>
          <Grid container>
            <Grid item sm>
              <Paper  className={classes.paper}>
                <ThemeProvider theme={theme}>
                  <Typography variant="h5">
                    Counter : {counter}
                    {isLogged ? <h3> Valuable Information I shouldnot see  </h3> : ''}
                  </Typography>
                </ThemeProvider>
                <Button variant="contained" color="primary" onClick={() => dispatch(increment())} className={classes.button}>+</Button>
                <Button variant="contained" color="primary" onClick={() => dispatch(decrement())} className={classes.button}>-</Button>
                <Button variant="contained" color="primary" onClick={() => dispatch(addBY(5))} className={classes.button}>+5</Button>
              </Paper>
            </Grid>
            <Grid item sm>
             <Paper  className={classes.paper}>
             <ThemeProvider theme={theme}>
                <Typography variant="h5" className={classes.heading}>React with Redux</Typography>
              </ThemeProvider>
             </Paper>
           </Grid>
           </Grid>
         </Fragment>
        );
    
}

export default Body;