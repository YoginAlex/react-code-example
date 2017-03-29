import React, { Component, PropTypes } from 'react';
import { withState, compose } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import moment from 'moment';

import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import { Popover } from '../../containers';

import { toggle } from '../../store/notifications';

import './Notifications.css';


class Notifications extends Component {
    static propTypes = {
        isShown: PropTypes.bool.isRequired,
        toggle: PropTypes.func.isRequired,

        setAnchor: PropTypes.func.isRequired,

        notifications: PropTypes.array.isRequired
    };

    render() {
        const {
            isShown, toggle: toggleAction,
            setAnchor,
            notifications
        } = this.props;

        const notifyItems = notifications.slice(-5).map((note, index) => {
            const relativeTime = moment(note.datetime).fromNow(true);

            return (
                <div
                    className={`notifyItem${!note.unread ? ' isReaded' : ''}`}
                    key={index}
                >
                    {note.title}
                    <p>
                        {relativeTime}
                    </p>
                </div>
            );
        });

        notifyItems.push(
            <div
                className="notifyItem action"
                key={notifyItems.length}
                onClick={(e) => {
                    e.preventDefault();

                    toggleAction();
                }}
            >
                ...show all
            </div>
        );

        return (
            <div>
                <Popover
                    isShown={isShown}
                    popoverContent={notifyItems}
                >
                    <Badge
                        badgeContent={notifications.length}
                        secondary
                        badgeStyle={{ top: 20, right: 20 }}
                    >
                        <IconButton
                            onTouchTap={(e) => {
                                e.preventDefault();

                                setAnchor(e.currentTarget);
                                toggleAction();
                            }}
                        >
                            <NotificationsIcon className="iconStyle" />
                        </IconButton>
                    </Badge>
                </Popover>
            </div>
        );
    }
}

const decorate = compose(
    connect(
        state => ({
            notifications: state.notifications.notifications,
            isShown: state.notifications.isShown
        }),
        dispatch => bindActionCreators({
            toggle
        }, dispatch)
    ),
    // withState('isShown', 'toggleShow', false),
    withState('anchor', 'setAnchor', null)
);

export default decorate(Notifications);

