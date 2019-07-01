import React from "react";
import IconToggle from "src/components/atoms/IconToggle";
import HamburgerIcon from "src/components/icons/HamburgerIcon";
import DrawerContext, { DrawerValue } from "src/contexts/DrawerContext";
import styled from "styled-components";

export interface HeaderProps extends React.Props<{}> {
    title: JSX.Element;
}

export default React.forwardRef((props: HeaderProps, ref) => (
    <DrawerContext.Consumer>
        {drawer => (
            <Header
                drawer={drawer}
                {...props}
                ref={ref as any}
            />
        )}
    </DrawerContext.Consumer>
));

interface Props extends React.Props<{}> {
    title: JSX.Element;
    drawer: DrawerValue;
}

const Header = (
    {
        title,
        drawer
    }: Props
) => {
    return (
        <AppBar>
            {!drawer.fixed && (
                <IconToggle>
                    <HamburgerIcon onClick={drawer.toggleDrawer}/>
                </IconToggle>
            )}
            <Title>{title}</Title>
        </AppBar>
    );
};

const AppBar = styled.header`
    && {
        align-items: center;
        width: calc(100% - 17rem - 6rem);
        margin: 1rem 3rem 0 2rem;
        border-radius: 8px;
        color: #333;
        background-color: white;
        position: fixed;
        top: 0;
        box-shadow: -1px 1px 5px 2px rgba(0, 0, 0, .3);
        display: flex;
        padding: .8rem 1rem;
        @media (max-width: 767px) {
            width: calc(100% - 2rem);
            margin: 2rem 1rem 1rem;
            box-sizing: border-box;
        }
    }
`;

const Title = styled.span`
    font-size: 1.2rem;
`;
