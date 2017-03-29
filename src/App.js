import React, { Component, PropTypes } from 'react';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Header, Actions } from './components';
import { addNotification } from './store/notifications';

import './App.css';

injectTapEventPlugin();


class App extends Component {
    static propTypes = {
        addNotification: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        setInterval(() => {
            this.props.addNotification(`Notification at ${new Date()}`);
        }, 15000);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Header />
                    <div className="content">
                        <Actions />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

const decorate = compose(
    connect(
        null,
        dispatch => bindActionCreators({
            addNotification
        }, dispatch)
    )
);

export default decorate(App);
