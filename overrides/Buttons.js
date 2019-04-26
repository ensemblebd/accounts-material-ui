import React from 'react';
import {Accounts, STATES, FormMessages} from 'meteor/std:accounts-ui';
import {RaisedButton, FlatButton, FontIcon} from 'material-ui';

export class Buttons extends Accounts.ui.Buttons {}

export class R15Button extends Accounts.ui.Button {
    render() {
        const {
            label,
            href = null,
            type,
            disabled = false,
            onClick,
            className,
            icon
        } = this.props;
        return type == 'link'
            ? (
                <FlatButton
                    href={href}
                    label={label}
                    icon={icon
                        ? <FontIcon className={`fa ${icon}`}/>
                        : null}
                    className={className}
                    onTouchTap={onClick}
                    disabled={disabled}
                    style={{marginRight: '5px'}}
                />
            )
            : (
                <RaisedButton
                    label={label}
                    icon={icon
                        ? <FontIcon className={`fa ${icon}`}/>
                        : null}
                    primary={true}
                    type={type}
                    className={className}
                    onTouchTap={onClick}
                    disabled={disabled}
                    style={{marginRight: '5px'}}
                />
            );
    }
}
export class R16Button extends Accounts.ui.Button {
    render() {
        const {
            label,
            href = null,
            type,
            disabled = false,
            onClick,
            className,
            icon
        } = this.props;
        return type == 'link'
            ? (
                <FlatButton
                    href={href}
                    label={label}
                    icon={icon
                        ? <FontIcon className={`fa ${icon}`}/>
                        : null}
                    className={className}
                    onClick={onClick}
                    disabled={disabled}
                    style={{marginRight: '5px'}}
                />
            )
            : (
                <RaisedButton
                    label={label}
                    icon={icon
                        ? <FontIcon className={`fa ${icon}`}/>
                        : null}
                    primary={true}
                    type={type}
                    className={className}
                    onClick={onClick}
                    disabled={disabled}
                    style={{marginRight: '5px'}}
                />
            );
    }
}

