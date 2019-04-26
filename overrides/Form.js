import React from 'react';
import {Accounts, STATES, FormMessages} from 'meteor/std:accounts-ui';

/**
 * Form.propTypes = {
 *   fields: React.PropTypes.object.isRequired,
 *   buttons: React.PropTypes.object.isRequired,
 *   error: React.PropTypes.string,
 *   ready: React.PropTypes.bool
 * };
 */

export class LoginForm extends Accounts.ui.LoginForm {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        // FIXME hack to solve issue #18

    }
    componentWillUnmount() {
        // override, the default calls upon ReactMeteorData , which results in a null ref to this._meteorDataManager
        // boy that was tricky to find.
    }


}

export class Form extends Accounts.ui.Form {

    render() {
        const {
            hasPasswordService,
            oauthServices,
            fields,
            buttons,
            error,
            message,
            ready = true,
            className,
            formState
        } = this.props;
        return (
            <form
                ref={(ref) => this.form = ref}
                className={["accounts", className].join(' ')}>
                {Object.keys(fields).length > 0
                    ? (<Accounts.ui.Fields fields={fields}/>)
                    : null}
                <Accounts.ui.Buttons buttons={buttons}/>

                {formState == STATES.SIGN_IN || formState == STATES.SIGN_UP
                    ? (
                        <div className="or-sep">
                            <Accounts.ui.PasswordOrService oauthServices={oauthServices}/>
                        </div>
                    )
                    : null}
                {formState == STATES.SIGN_IN || formState == STATES.SIGN_UP
                    ? (<Accounts.ui.SocialButtons oauthServices={oauthServices}/>)
                    : null}

                <Accounts.ui.FormMessage {...message}/>
            </form>
        );
    }
}