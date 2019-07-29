import { Typography } from "@material-ui/core";
import AppBar, { AppBarProps } from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useContext } from "react";
import DrawerContext from "src/contexts/DrawerContext";
import styled from "styled-components";

export interface HeaderProps extends AppBarProps {
    appTitle: JSX.Element;
}

export default (
    {
        appTitle,
        ...props
    }: HeaderProps
) => {
    const drawer = useContext(DrawerContext);

    return (
        <StyledAppBar
            position="fixed"
            {...props}
        >
            <StyledToolbar>
                <MenuIconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={drawer.toggleDrawer}
                >
                    <MenuIcon/>
                </MenuIconButton>
                <Typography variant="h6" color="inherit">
                    {appTitle}
                </Typography>
                <div>
                    WIP
                </div>
            </StyledToolbar>
        </StyledAppBar>
    );
};

const StyledAppBar = styled(AppBar)`
    && {
        width: calc(100% - 17rem - 6rem);
        margin: 1rem 3rem 0 2rem;
        border-radius: 8px;
        color: #333;
        background-color: white;
        @media (max-width: 767px) {
            width: calc(100% - 6rem);
        }
    }
`;

const MenuIconButton = styled(IconButton)`
    && {
        @media (min-width: 768px) {
            display: none;
        }
    }
`;

const StyledToolbar = styled(Toolbar)`
    && {
        display: flex;
        > :nth-child(2) {
            flex-grow: 1;
        }
    }
`;
