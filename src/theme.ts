import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#4169e1'  
        },
        secondary: {
            main: '#000080',
        }
    },
    typography: {
        fontFamily: [
            'Inter',
            'sans-serif'
        ].join(','),
    },
})

export default theme