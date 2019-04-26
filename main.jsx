import React from 'react';
import {Accounts, STATES, FormMessages} from 'meteor/std:accounts-ui';

import {LoginForm, Form, Buttons, R15Button, R16Button, Fields, Field, FormMessage, SocialButtons} from './overrides/AllOverrides';


// Notice! Accounts.ui.LoginForm manages all state logic at the moment, so avoid overwriting this
// one, but have a look at it and learn how it works. And pull requests altering how that works are
// welcome. Alter provided default unstyled UI.
Accounts.ui.LoginForm = LoginForm;
Accounts.ui.Form = Form;
Accounts.ui.Buttons = Buttons;
if (React.version.startsWith("15")) {
    Accounts.ui.Button = R15Button;
} else {
    Accounts.ui.Button = R16Button;
}
Accounts.ui.Fields = Fields;
Accounts.ui.Field = Field;
Accounts.ui.FormMessage = FormMessage;
Accounts.ui.SocialButtons = SocialButtons;

// Export the themed version.
export {Accounts, STATES};
export default Accounts;
