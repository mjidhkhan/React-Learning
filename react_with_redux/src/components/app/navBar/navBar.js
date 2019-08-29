import React, { Component } from 'react'

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


export default function navBar(props) {
    return (
        <React.Fragment>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">React Redux</Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}