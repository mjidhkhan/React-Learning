import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement, addBY } from '../../actions'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


import AppBar from './navBar/navBar';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop:theme.spacing(10), 
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
  }
}));

function App() {
  const classes = useStyles();
 const counter = useSelector(state => state.counter)
 const isLogged = useSelector(state => state.isLogged)
 const dispatch = useDispatch();
  return (
    <React.Fragment>
      <AppBar />
      <CssBaseline />
      <Container>
        <Card className={classes.card}>
          <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"> 
          <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
              Counter : {counter}
          </Typography>
          </CardMedia>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Typography>
          <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {isLogged ? <h3> Valuable Information I shouldnot see  </h3> : ''}
              </Typography>
          </CardContent>
          <hr />
          <CardActions>
           
            <Button variant="contained" color="primary" onClick={() => dispatch(increment())} className={classes.button}>+</Button>
            <Button variant="contained" color="primary" onClick={() => dispatch(decrement())} className={classes.button}>-</Button>
            <Button variant="contained" color="primary" onClick={() => dispatch(addBY(5))} className={classes.button}>+5</Button>
          </CardActions>
        </Card>
      </Container>
    </React.Fragment>
    
      
   
  );
}

export default App;
