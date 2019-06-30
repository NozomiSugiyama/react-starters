import { createContext } from "react";

export interface Token {
    jwtToken: string;
    payload: {
        [id: string]: any;
    };
}

export type SingIn = (email: string, password: string) => Promise<Token>;
export type SingUp = (userName: string, password: string, attribute?: {[key: string]: string}) => Promise<string>;
export type SingOut = () => Promise<void>;
export type UpdateEmail = (email: string) => Promise<void>;
export type UpdatePassword = (password: string, newPassword: string) => Promise<void>;

export type Subscriber = (token: Token | null) => void;
export type SubscribeToken = (subscriber: Subscriber) => () => void;

export type AuthValue = {
    signIn: SingIn;
    signUp: SingUp;
    signOut: SingOut;
    updateEmail: UpdateEmail;
    updatePassword: UpdatePassword;
    subscribeToken: SubscribeToken;
    token: Token | null;
};

// It is declared by React Component
// To make the compilation successful, temporary values ​​are included
export default createContext<AuthValue>({
    signIn: () => new Promise(() => undefined),
    signUp: () => new Promise(() => undefined),
    signOut: () => new Promise(() => undefined),
    updateEmail: () => new Promise(() => undefined),
    updatePassword: () => new Promise(() => undefined),
    subscribeToken: () => () => undefined,
    token: null,
});
