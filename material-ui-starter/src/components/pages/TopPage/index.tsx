import AddIcon from "@material-ui/icons/Add";
import React, { useContext } from "react";
import { RouteChildrenProps } from "react-router";
import Fab from "src/components/atoms/Fab";
import LocationText from "src/components/atoms/LocationText";
import Header from "src/components/molecules/Header";
import Host from "src/components/pages/TopPage/Host";
import RouterHistoryContext from "src/contexts/RouterHistoryContext";

export type TopPageProps = React.ComponentProps<typeof Host> & RouteChildrenProps<{problemId: string}>;

export default (props: TopPageProps) => {
    const routerHistory = useContext(RouterHistoryContext);

    return (
        <Host
            ref={props.ref as any}
            {...props}
        >
            <Header
                appTitle={<LocationText text="Top"/>}
            />
                <div>Test</div>
            <Fab
                onClick={() => routerHistory.history.push("/top")}
            >
                <AddIcon />
            </Fab>
        </Host>
    );
};
