import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Link from "src/components/atoms/Link";
import styled from "styled-components";

export type NavigatorProps = React.ComponentProps<typeof Host>;

export default (props: NavigatorProps) => (
    <Host {...props}>
        <Title variant="h2">
            <Link to="/">
                Service Name
            </Link>
        </Title>
        <Divider/>
    </Host>
);

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
