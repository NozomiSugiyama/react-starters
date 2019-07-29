import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
// import StarIcon from "@material-ui/icons/Star";
import React from "react";
import Link from "src/components/atoms/Link";
// import LocalizationContext, { LocalizationValue } from "src/contexts/LocalizationContext";
// import NotificationContext, { NotificationValue } from "src/contexts/NotificationContext";
// import RouterHistoryContext, { RouterHistoryValue } from "src/contexts/RouterHistoryContext";
import styled from "styled-components";

// export default React.forwardRef((props, ref) => (
//     <RouterHistoryContext.Consumer>
//         {routerHistory => (
//             <NotificationContext.Consumer>
//                 {notification => (
//                     <Navigator
//                         routerHistory={routerHistory}
//                         notification={notification}
//                         {...props}
//                         ref={ref as any}
//                     />
//                 )}
//             </NotificationContext.Consumer>
//         )}
//     </RouterHistoryContext.Consumer>
// ));

interface State {
    tagListVisible: boolean;
    tags: string[];
}

export interface NavigatorProps extends React.ComponentProps<typeof Host> {
}

export default class Navigator extends React.Component<NavigatorProps, State> {

    render() {

        const {
            ...props
        } = this.props;

        return (
            <Host {...props}>
                <Title variant="h2">
                    <Link to="/">
                        Service Name
                    </Link>
                </Title>
                <Divider/>
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

const Title = styled(Typography)`
    && {
        font-size: 2rem;
        padding-top: 1.5rem;
        padding-bottom: 1rem;
        text-align: center;
        letter-spacing: .4rem;
    }
`;
