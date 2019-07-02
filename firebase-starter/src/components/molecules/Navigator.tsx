import React, { useContext } from "react";
import FlexibleSpace from "src/components/atoms/FlexibleSpace";
import Link from "src/components/atoms/Link";
import List from "src/components/atoms/List";
import ListItem from "src/components/atoms/ListItem";
import DrawerContext from "src/contexts/DrawerContext";
import styled from "styled-components";

export interface NavigatorProps extends React.Props<{}> {
}

export default (props: NavigatorProps) => {
    const drawer = useContext(DrawerContext);
    return (
        <Host {...props} ref={props.ref as any}>
            <Title drawerFixed={drawer.fixed}>
                <Link to="/">
                    ICTSC
                </Link>
            </Title>
            <Line/>
            <List>
                <Link to="/top">
                    <ListItem button>
                        トップ
                    </ListItem>
                </Link>
            </List>
            <FlexibleSpace/>
            <Line/>
        </Host>
    );
};

const Host = styled.div`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 2rem);
    max-height: calc(100vh - 2rem);
    width: 15rem;
    overflow: auto;
    margin: 1rem;
    box-sizing: border-box;
`;

interface TitleProps {
    drawerFixed: boolean;
}

const Title = styled.h2<TitleProps>`
    font-size: 2rem;
    text-align: center;
    letter-spacing: .4rem;
    ${props => props.drawerFixed ? `
        padding-bottom: .5rem;
    `                            : `
        padding-top: 1.5rem;
        padding-bottom: 1rem;
    `
    }
`;

const Line = styled.hr`
    border: .5px solid var(--main-color, #888);
`;
