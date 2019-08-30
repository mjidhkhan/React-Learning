import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { getThemeProps } from '@material-ui/styles';


function Footer()  {
 

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      marginTop:theme.spacing(10), 
      textAlign: 'center',
      color: theme.palette.text.secondary,
      marginLeft:theme.spacing(1),
      marginRight:theme.spacing(1),
      borderRadius:0,
    },
    }));
      
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
 
  return (
    
    <Paper  className={classes.paper}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
  );
  
}

export default Footer;