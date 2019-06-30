import { createContext } from "react";
import {  } from "src/components/atoms/Notification";

export type NotificationFn = (type: "info" | "error", message: string) => void;
type ErrorComponentProps = { message: string };
export type NotificationValue = {
    ErrorComponent: (props: ErrorComponentProps) => JSX.Element,
    notification  : NotificationFn
};

// It is declared by React Component
// To make the compilation successful, temporary values ​​are included
export default createContext<NotificationValue>({
    ErrorComponent: () => ({} as any),
    notification: () => undefined
});
