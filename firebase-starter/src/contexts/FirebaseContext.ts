import firebase from "firebase/app";
import { createContext } from "react";

export type FirebaseValue = {
    app: firebase.app.App | null
};

// It is declared by React Component
// To make the compilation successful, temporary values ​​are included
export default createContext<FirebaseValue>({
    app: null
});
