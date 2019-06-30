
import * as H from "history";
import { createContext } from "react";
import { match } from "react-router";

export type RouterHistoryValue = {
    history: H.History;
    match: match<any>;
    location: H.Location<any>
};

// It is declared by React Component
// To make the compilation successful, temporary values ​​are included
export default createContext<RouterHistoryValue>({
    // TODO: fix
    history: H.createHashHistory(),
    match: {} as any,
    location: {} as any
});
