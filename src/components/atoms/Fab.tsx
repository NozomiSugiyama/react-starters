import Fab, { FabProps } from "@material-ui/core/Fab";
import React from "react";
import styled from "styled-components";

const StyledFab = styled(Fab as React.SFC<FabProps>)`
    && {
        position: fixed;
        right: 0;
        bottom: 0;
        margin: 2rem;
        @media (max-width: 768px) {
            bottom: 2rem;
        }
    }
`;

// TODO: https://github.com/styled-components/styled-components/issues/1695
export default (props: FabProps & { innerRef?: (instance: any) => void; }) =>
    <StyledFab color="primary" {...props}/>;
