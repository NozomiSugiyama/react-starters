import { createContext } from "react";

export type DrawerValue = {
    toggleDrawer: () => void
};

// It is declared by React Component
// To make the compilation successful, temporary values ​​are included
export default createContext<DrawerValue>({
    toggleDrawer: () => undefined
});
