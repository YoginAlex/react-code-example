import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import { Notifications } from '../index';

export default class Header extends Component {
    render() {
        return (
            <AppBar
                title="React Example"
                showMenuIconButton={false}
                iconElementRight={<Notifications />}
            />
        );
    }
}
