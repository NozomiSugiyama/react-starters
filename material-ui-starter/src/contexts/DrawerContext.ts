import { createContext } from "react";

export type LocaleValue = {
    toggleDrawer: () => void
};

// It is declared by React Component
// To make the compilation successful, temporary values ​​are included
export default createContext<LocaleValue>({
    toggleDrawer: () => undefined
});
