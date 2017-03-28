import React, { Component, PropTypes } from 'react';
import { withState, compose } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import moment from 'moment';

import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Popover, { PopoverAnimationVertical } from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import { addNotification, toggle } from '../../store/notifications';

import './Notifications.css';


class Notifications extends Component {
    static propTypes = {
        isShown: PropTypes.bool.isRequired,
        toggle: PropTypes.func.isRequired,

        anchor: PropTypes.any,
        setAnchor: PropTypes.func.isRequired,

        notifications: PropTypes.array.isRequired,
        addNotification: PropTypes.func.isRequired
    };

    render() {
        const {
            isShown, toggle,
            anchor, setAnchor,
            notifications, addNotification
        } = this.props;

        const menuItems = notifications.slice(0, 5).map((note, index) => {
            const relativeTime = moment(note.datetime).fromNow(true);

            return <MenuItem
                key={index}
                primaryText={
                    <div>
                        {note.title}
                        <div className="secondaryText">
                            {relativeTime}
                        </div>
                    </div>
                }
            />
        });

        return (
            <div>
                <Badge
                    badgeContent={notifications.length}
                    secondary={true}
                    badgeStyle={{ top: 20, right: 20 }}
                >
                    <IconButton
                        onTouchTap={(e) => {
                            e.preventDefault();

                            setAnchor(e.currentTarget);
                            toggle();
                        }}
                    >
                        <NotificationsIcon className="iconStyle" />
                    </IconButton>
                </Badge>

                <Popover
                    open={isShown}
                    anchorEl={anchor}
                    anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                    targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                    onRequestClose={() => {
                        toggle(false);
                    }}
                    animation={PopoverAnimationVertical}
                >
                    <Menu>
                        {menuItems}
                        <MenuItem
                            primaryText="...show all"
                            onTouchTap={(e) => {
                                e.preventDefault();

                                toggle();
                            }}
                        />
                    </Menu>
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
            addNotification, toggle
        }, dispatch)
    ),
    // withState('isShown', 'toggleShow', false),
    withState('anchor', 'setAnchor', null)
);

export default decorate(Notifications);

