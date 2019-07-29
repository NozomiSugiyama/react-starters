import {
    withTheme,
    IconButton,
} from "@material-ui/core";
import Snackbar, { SnackbarProps } from "@material-ui/core/Snackbar";
import SnackbarContent, { SnackbarContentProps } from "@material-ui/core/SnackbarContent";
import CloseIcon from "@material-ui/icons/Close";
import React, { useState } from "react";
import styled from "styled-components";

type _X = Omit<SnackbarProps & { type: "error" | "info"}, "open"> & {
    open?: boolean
};

export type NotificationProps = Omit<_X, "onClose"> & {
    onClose?: () => void
};

export default (
    {
        onClose,
        type,
        message,
        ...props
    }: NotificationProps
) => {
    const [visibled, setVisibility] = useState<boolean>(true);
    const _onClose = () => setVisibility(false);

    return (
        <Snackbar
            anchorOrigin={{
                horizontal: "left",
                vertical: "bottom"
            }}
            onClose={onClose || _onClose}
            autoHideDuration={6000}
            ContentProps={{
                "aria-describedby": "message-id",
            }}
            open={visibled}
            {...props}
        >
            <StyledSnackbarContent
                type={type}
                message={<span id="message-id">{message}</span>}
                action={[
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={onClose || _onClose}
                    >
                        <StyledCloseIcon/>
                    </IconButton>
                ]}
            />
        </Snackbar>
    );
};

interface SnackbarContentBaseProps extends SnackbarContentProps {
    type: "error" | "info";
}

const StyledSnackbarContentBase = styled(SnackbarContent)<SnackbarContentBaseProps>`
    && {
        ${props => props.type === "error" ? `background-color: ${props.theme.palette.error.dark}` : ""}
    }
`;

const StyledSnackbarContent = withTheme(
    (props: any) => <StyledSnackbarContentBase {...props}/>
);

const StyledCloseIcon = styled(CloseIcon)`
    && {
        font-size: 1.5rem;
    }
`;
