import { createContext } from "react";

export type DrawerValue = {
    toggleDrawer: () => void,
    open: () => void,
    close: () => void,
    opend: boolean,
    fixed: boolean
};

// It is declared by React Component
// To make the compilation successful, temporary values ​​are included
export default createContext<DrawerValue>({
    toggleDrawer: () => undefined,
    open: () => undefined,
    close: () => undefined,
    opend: false,
    fixed: false
});
