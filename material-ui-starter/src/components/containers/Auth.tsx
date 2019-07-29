import React, { useState } from "react";
// import config from "src/config";
import AuthContext, { Token } from "src/contexts/AuthContext";

// type Subscriber = {
//     id: string;
//     fn: AuthSubscriber;
// };

export default (
    {
        children
    }: {
        children?: React.ReactNode
    }
) => {

    // const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
    const [token, /* setToken */] = useState<Token | null>(
        // TODO
        null
    );

    // const _updateToken = (token: Token | null) => {
    //     _setToken(token);
    //     for (const x of subscribers)
    //         x.fn(token);
    // };

    return (
        <AuthContext.Provider
            value={{
                token,
                // TODO
                signIn: (_email: string, _password: string) => new Promise((_resolve, _reject) => {}),
                signOut: () => new Promise((_resolve, _reject) => {}),
                signUp: (_userName, _password, _attribute) => new Promise((_resolve, _reject) => {}),
                updateEmail: (_email) => new Promise((_resolve, _reject) => {}),
                updatePassword: (_password, _newPassword) => new Promise((_resolve, _reject) => {}),
                subscribeToken: (_subscriber) => () => {}
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
