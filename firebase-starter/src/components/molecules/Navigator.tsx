import React from "react";
import Link from "src/components/atoms/Link";
import DrawerContext, { DrawerValue } from "src/contexts/DrawerContext";
import RouterHistoryContext, { RouterHistoryValue } from "src/contexts/RouterHistoryContext";
import styled from "styled-components";

export default React.forwardRef((props, ref) => (
    <RouterHistoryContext.Consumer>
        {routerHistory => (
            <DrawerContext.Consumer>
                {drawer => (
                    <Navigator
                        routerHistory={routerHistory}
                        drawer={drawer}
                        {...props}
                        ref={ref as any}
                    />
                )}
            </DrawerContext.Consumer>
        )}
    </RouterHistoryContext.Consumer>
));

interface State {
    tagListVisible: boolean;
    tags: string[];
}

interface Props {
    routerHistory: RouterHistoryValue;
    drawer: DrawerValue;
}

class Navigator extends React.Component<Props, State> {

    render() {

        const {
            drawer,
            ...props
        } = this.props;

        return (
            <Host {...props}>
                <Title>
                    <Link to="/">
                        Service Name
                    </Link>
                </Title>
                <hr/>
            </Host>
        );
    }
}

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

const Title = styled.h2`
    && {
        font-size: 2rem;
        padding-top: 1.5rem;
        padding-bottom: 1rem;
        text-align: center;
        letter-spacing: .4rem;
    }
`;
