import React, { Component, PropTypes } from 'react';

import './Popover.css';


export default class Popover extends Component {
    static propTypes = {
        isShown: PropTypes.bool.isRequired,
        popoverContent: PropTypes.any,
        children: PropTypes.node
    };

    render() {
        const {
            isShown, children, popoverContent
        } = this.props;


        const classNames = `popover${isShown ? ' active' : ''}`;

        return (
            <div className="wrapper">
                {children}

                <div className={classNames}>
                    {popoverContent}
                </div>
            </div>
        );
    }
}
