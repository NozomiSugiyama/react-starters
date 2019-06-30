import { Drawer } from "@material-ui/core";
import React, { useState } from "react";
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

    const toggleDrawer = () => setDrawerOpen(!drawerOpend);
    const handleLocale = () => setLocation(location === "us" ? "jp" : "us");

    return (
        <Host>
            <LocalizationContext.Provider
                value={{
                    handleLocale,
                    location,
                    locationText: locationTextList[location]
                }}
            >
                <div>
                    <Drawer
                        variant="temporary"
                        anchor={"left"}
                        open={drawerOpend}
                        onClose={toggleDrawer}
                        ModalProps={{ keepMounted: true }}
                    >
                        <Navigator/>
                    </Drawer>
                </div>
                <div>
                    <Drawer
                        variant="permanent"
                        open
                    >
                        <Navigator/>
                    </Drawer>
                </div>
                <Content>
                    <DrawerContext.Provider
                        value={{ toggleDrawer }}
                    >
                        {children}
                    </DrawerContext.Provider>
                </Content>
            </LocalizationContext.Provider>
        </Host>
    );
};

const Host = styled.div`
    background-color: #fafbfd;
    > :nth-child(1) {
        display: none;
    }
    > :nth-child(2) {
        display: flex;
    }

    @media (max-width: 767px) {
        > :nth-child(1) {
            display: flex;
        }
        > :nth-child(2) {
            display: none;
        }
    }
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
