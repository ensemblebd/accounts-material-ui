import React from 'react';
import {Accounts, STATES, FormMessages} from 'meteor/std:accounts-ui';
import {TextField} from 'material-ui';

export class Fields extends Accounts.ui.Fields {
    render() {
        let {
            fields = {},
            className = ""
        } = this.props;
        return (
            <div className={[className].join(' ')}>
                {Object.keys(fields).map((id, i) => <div key={i}>
                    <Accounts.ui.Field {...fields[id]}/>
                </div>)}
            </div>
        );
    }
}
export class Field extends Accounts.ui.Field {
    render() {
        const {
            id,
            hint,
            label,
            type = 'text',
            onChange,
            required = false,
            className,
            defaultValue = "",
            message = {message:"",type:"info"}
        } = this.props;
        const {
            mount = true
        } = this.state;
        this.message = (this.props.message || {message:"",type:"info"});
        return mount
            ? (<div>
                    <TextField className={"textField"}
                        floatingLabelText={label}
                        hintText={hint}
                        onChange={onChange}
                        fullWidth={true}
                        defaultValue={defaultValue}
                        name={id}
                        type={type}
                        ref={(ref) => this.input = ref}
                        required={required
                            ? "required"
                            : ""}
                        autoCapitalize={type == 'email'
                            ? 'none'
                            : 'words'}
                        autoCorrect="off"/>
                    <span className={['message', (this.message.type)].join(' ').trim()}>
						{this.message.message}
					</span>
                </div>
            )
            : null;
    }
}
