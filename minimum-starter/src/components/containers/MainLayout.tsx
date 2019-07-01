import React, { useEffect, useState } from "react";
import Drawer from "src/components/atoms/Drawer";
import Navigator from "src/components/molecules/Navigator";
import DrawerContext from "src/contexts/DrawerContext";
import LocalizationContext from "src/contexts/LocalizationContext";
import locationTextList, { Location } from "src/localization/locale";
import styled from "styled-components";

export default (
    {
        children
    }: React.Props<{}>
) => {
    const [location, setLocation] = useState<Location>(
        () => {
            const language = (window.navigator.languages && window.navigator.languages[0]) || window.navigator.language;
            return language === "ja" || language === "ja-JP" ? "jp" : "us";
        }
    );
    const [drawerOpend, setDrawerOpen] = useState<boolean>(false);

    const handleLocale = () => setLocation(location === "us" ? "jp" : "us");

    const [drawerFixed, setDrawerFixed] = useState<boolean>(false);
    useEffect(
        () => {
            const handleResize = () => setDrawerFixed(window.innerWidth > 767);
            handleResize();
            window.addEventListener("resize", handleResize);

            return () => window.removeEventListener("resize", handleResize);
        },
        []
    );

    return (
        <Host>
            <LocalizationContext.Provider
                value={{
                    handleLocale,
                    location,
                    locationText: locationTextList[location]
                }}
            >
                <DrawerContext.Provider
                    value={{
                        open: () => setDrawerOpen(true),
                        close: () => setDrawerOpen(false),
                        toggleDrawer: () => setDrawerOpen(!drawerOpend),
                        opend: drawerOpend,
                        fixed: drawerFixed
                    }}
                >
                    <Drawer
                        fixed={drawerFixed}
                    >
                        <Navigator/>
                    </Drawer>
                    <Content>
                            {children}
                    </Content>
                </DrawerContext.Provider>
            </LocalizationContext.Provider>
        </Host>
    );
};

const Host = styled.div`
    background-color: #fafbfd;
`;

const Content = styled.main`
    position: relative;
    width: calc(100% - 17rem);
    margin-left: 17rem;
    @media (max-width: 767px) {
        width: 100%;
        margin-left: 0rem;
    }
`;
