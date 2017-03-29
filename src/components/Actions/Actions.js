import React, { Component, PropTypes } from 'react';
import { compose, withState } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import {
    addNotification,
    toggle,
    removeAll,
    markAllAsRead
} from '../../store/notifications';


const style = {
    button: {
        margin: 12
    }
};

class Actions extends Component {
    static propTypes = {
        addNotification: PropTypes.func.isRequired,
        toggle: PropTypes.func.isRequired,
        removeAll: PropTypes.func.isRequired,
        markAllAsRead: PropTypes.func.isRequired,

        newNotification: PropTypes.string,
        setNewNotification: PropTypes.func.isRequired,
    };

    render() {
        const {
            addNotification: addNotificationAction,
            toggle: toggleAction,
            removeAll: removeAllAction,
            markAllAsRead: markAllAsReadAction,
            newNotification, setNewNotification
        } = this.props;

        return (
            <div>
                <div>
                    <TextField
                        hintText="enter new notify"
                        onChange={(e, value) => {
                            setNewNotification(value);
                        }}
                    />
                    <FlatButton
                        label="Add"
                        primary
                        onTouchTap={() => {
                            if (newNotification) {
                                addNotificationAction(newNotification);
                            }
                        }}
                    />
                </div>
                <div>
                    <RaisedButton
                        label="Mark all as Read"
                        style={style.button}
                        onTouchTap={() => {
                            markAllAsReadAction();
                        }}
                    />
                    <br />
                    <RaisedButton
                        label="Delete all Notifications"
                        style={style.button}
                        onTouchTap={() => {
                            removeAllAction();
                        }}
                    />
                    <br />
                    <RaisedButton
                        label="Toggle"
                        style={style.button}
                        onTouchTap={() => {
                            toggleAction();
                        }}
                    />
                </div>
            </div>
        );
    }
}

const decorate = compose(
    connect(
        null,
        dispatch => bindActionCreators({
            addNotification,
            toggle,
            removeAll,
            markAllAsRead
        }, dispatch)
    ),
    withState('newNotification', 'setNewNotification', '')
);

export default decorate(Actions);

