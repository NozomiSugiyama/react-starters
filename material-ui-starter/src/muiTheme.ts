import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
    overrides: {
        MuiDrawer: {
            paper: {
                backgroundColor: "#fafbfd"
            },
            paperAnchorDockedLeft: {
                borderRight: "none"
            }
        },
        MuiDialog: {
            paper: {
                border: 0,
                borderRadius: 8,
                color: "#333",
            },
        },
    },
    palette: {
        primary: {
            contrastText: "#fff",
            dark: "#c56200",
            light: "#ffc246",
            main: "#ff9100",
        },
    }
});
