import React from 'react';
import {Accounts, STATES, FormMessages} from 'meteor/std:accounts-ui';
import {green500, lightBlue600, red500, yellow600} from "material-ui/styles/colors";
import {Snackbar} from 'material-ui';

export class FormMessage extends Accounts.ui.FormMessage {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.message) {
            this.setState({open: true});
        }
    }

    handleRequestClose() {
        this.setState({open: false});
    };

    render() {
        const {message, type} = this.props;
        let bodyStyle;
        switch (type) {
            case 'warning':
                bodyStyle = {
                    backgroundColor: yellow600
                };
                break;
            case 'success':
                bodyStyle = {
                    backgroundColor: green500
                };
                break;
            case 'error':
                bodyStyle = {
                    backgroundColor: red500
                };
                break;
            case 'info':
                bodyStyle = {
                    backgroundColor: lightBlue600
                };
                break;
        }

        return message
            ? (<Snackbar
                open={this.state.open}
                message={message}
                bodyStyle={bodyStyle}
                action="OK"
                autoHideDuration={4000}
                onActionTouchTap={this.handleRequestClose.bind(this)}
                onRequestClose={this.handleRequestClose.bind(this)}/>)
            : null;
    }
}