import React from 'react';
import {Accounts, STATES, FormMessages} from 'meteor/std:accounts-ui';
import {socialButtonIcons, socialButtonsColors} from "../social_buttons_config";
import {RaisedButton, FontIcon} from 'material-ui';

export class SocialButtons extends Accounts.ui.SocialButtons {
    render() {
        let {
            oauthServices = {},
            className = "social-buttons"
        } = this.props;
        if (Object.keys(oauthServices).length > 0) {
            return (
                <div className={[className].join(' ')}>
                    {Object.keys(oauthServices).map((id, i) => {
                        let serviceClass = id.replace(/google|meteor\-developer/gi, (matched) => {
                            return socialButtonIcons[matched];
                        });
                        const {label, type, onClick, disabled} = oauthServices[id];
                        return (
                            <RaisedButton
                                key={i}
                                label={label}
                                type={type}
                                onTouchTap={onClick}
                                disabled={disabled}
                                className={serviceClass.length > 0
                                    ? `${serviceClass}`
                                    : ''}
                                icon={serviceClass.length > 0
                                    ? <FontIcon className={`fa fa-${serviceClass}`}/>
                                    : ''}
                                backgroundColor={socialButtonsColors[id].background}
                                labelColor={socialButtonsColors[id].label}
                                style={{marginRight: '5px'}}
                            />
                        );
                    })}
                </div>
            );
        } else {
            return null;
        }

    }
}