import React, { Component, Fragment } from 'react'

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


export default function Header(props) {
    return (
        <Fragment>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">React Redux</Typography>
                </Toolbar>
            </AppBar>
        </Fragment>
    );
}