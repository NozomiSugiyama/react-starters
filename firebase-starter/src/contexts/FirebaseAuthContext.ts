import firebase from "firebase/app";
import { createContext } from "react";

export type SingIn = (email: string, password: string) => Promise<firebase.auth.UserCredential>;
export type SingOut = () => Promise<void>;
export type UpdateEmail = (email: string) => Promise<void>;
export type UpdatePassword = (password: string, newPassword: string) => Promise<void>;

export type FirebaseAuthValue = {
    signIn: SingIn;
    signOut: SingOut;
    updateEmail: UpdateEmail;
    updatePassword: UpdatePassword;
    auth: firebase.auth.Auth;
};

// It is declared by React Component
// To make the compilation successful, temporary values ​​are included
export default createContext<FirebaseAuthValue>({
    signIn: () => new Promise(() => undefined),
    signOut: () => new Promise(() => undefined),
    updateEmail: () => new Promise(() => undefined),
    updatePassword: () => new Promise(() => undefined),
    auth: ({} as firebase.auth.Auth),
});
