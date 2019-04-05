import AddIcon from "@material-ui/icons/Add";
import React, { useContext } from "react";
import Fab from "src/components/atoms/Fab";
import LocationText from "src/components/atoms/LocationText";
import Header from "src/components/molecules/Header";
import Host from "src/components/pages/WorkListPage/Host";
import RouterHistoryContext from "src/contexts/RouterHistoryContext";

export default (props: React.Props<{}>) => {
    const routerHistory = useContext(RouterHistoryContext);

    return (
        <Host
            ref={props.ref as any}
            {...props}
        >
            <Header
                title={<LocationText text="Works"/>}
            />
                <div>Test</div>
            <Fab
                onClick={() => routerHistory.history.push("/works/create-work")}
            >
                <AddIcon />
            </Fab>
        </Host>
    );
};
