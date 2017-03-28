import React, { Component, PropTypes } from 'react';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import { addNotification } from '../../store/notifications';


const style = {
    button: {
        margin: 12
    }
}

class Actions extends Component {
    static propTypes = {
        addNotification: PropTypes.func.isRequired
    };

    render() {
        const {
            addNotification
        } = this.props;

        return (
            <div>
                <div>
                    <TextField
                        hintText="enter new notify"
                    />
                    <FlatButton
                        label="Add"
                        primary={true}
                    />
                </div>
                <div>
                    <RaisedButton label="Mark all as Read" style={style.button} />
                    <br/>
                    <RaisedButton label="Delete all Notifications" style={style.button} />
                    <br/>
                    <RaisedButton label="Toggle" style={style.button} />
                </div>
            </div>
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

export default decorate(Actions);

