import {createTheme, ThemeProvider} from "@mui/material/styles";
import type {ThemeOptions} from "@mui/material";
import {Button, Grid, Typography} from "@mui/material";
import flowerLImg from "../src/static/flowers/FlowerLarge.png";
import program2 from "../src/static/Program2.png"

const paletteTheme: ThemeOptions = {
    palette: {
        mode: "light",
        primary: {
            main: "#b6693d",
            contrastText: "#F5F5F5",
        },
        secondary: {
            main: "#AD1457",
        },
        error: {
            main: "#e21a00",
        },
        text: {
            primary: "#9a4e23",
            secondary: "#424242",
        },
        info: {
            main: "#5300bf",
        },
        success: {
            main: "#00bf46",
        },
        warning: {
            main: "#bf8900",
        },
        background: {
            default: "#ebdbcd",
            paper: "#ebdbcd",
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 650,
            md: 800,
            lg: 1280,
            xl: 1920,
        },
    },

    typography: {
        fontFamily: "'Bree Serif', serif",
        h1: {
            fontFamily: "'Great Vibes', cursive",
            color: "#b6693d",
            fontSize: "4.7rem",
            "@media (min-width:650px)": {
                fontSize: "5.7rem",
            },
            "@media (min-width:800px)": {
                fontSize: "7.5rem",
            },
            "@media (min-width:1280px)": {
                fontSize: "9.5rem",
            },
        },

        h5: {
            // color: "#b6693d",
            fontSize: "1rem",
            "@media (min-width:650px)": {
                fontSize: "1.3rem",
            },
            "@media (min-width:800px)": {
                fontSize: "1.5rem",
            },
            "@media (min-width:1280px)": {
                fontSize: "1.7rem",
            },
        },


    },
};

function App() {


    return (
        <ThemeProvider theme={createTheme(paletteTheme)}>
            <div className="content">

                <Grid container sx={{
                    width: "100%",

                    top: 0,
                    left: 0,
                    right: 0,

                }}>

                    <Grid item lg={4} md={6} sm={12} className="gridItem">
                        <img src={flowerLImg} alt="flowerLImg"
                             className="gridUpperImg"/>
                    </Grid>

                    <Grid item lg={4} md={6} sm={0} className="gridItem"
                          sx={{display: {xs: "none", sm: "none", md: "block"}}}>
                        <img src={flowerLImg} alt="flowerLImg"
                             className="gridUpperImg"/>
                    </Grid>

                    <Grid item lg={4} md={0} sm={0} className="gridItem"
                          sx={{display: {xs: "none", sm: "none", md: "none", lg: "block"}}}>
                        <img src={flowerLImg} alt="flowerLImg"
                             className="gridUpperImg"/>
                    </Grid>

                </Grid>


                <br/>
                <Typography variant="h1" className="titleText">Vik & Gerő</Typography>
                <br/>


                <Typography variant="h5" className="greetingText">Köszönjük hogy meglátogattad a
                    weboldalunkat!</Typography>

                <br/>

                <Button
                    variant="outlined"
                    sx={{
                        color: "#655f1a",
                        borderColor: "#b6693d",
                        textTransform: "none",

                        "&:hover": {
                            color: "#9a4e23",
                            borderColor: "#485935",
                        }
                    }}
                    href="https://docs.google.com/forms/d/e/1FAIpQLScC_4RoHd--PYRHb81cJsq9S11JEhWaYsQSV00X_Hl-dQxTpg/viewform"

                    target="_blank"
                >
                    <Typography variant="h6">Visszajelzek!</Typography>
                </Button>


                <br/>

                <Typography variant="h5" className="dateText">2025. Május 31.</Typography>
                <br/>

                <img src={program2} alt="program" className="programImg"/>

                <br/>

                <Grid container sx={{
                    width: "100%",

                }}>

                    <Grid item lg={4} md={6} sm={12} className="gridItem">
                        <img src={flowerLImg} alt="flowerLImg" style={{width: "100%", maxWidth: "800px"}}/>
                    </Grid>

                    <Grid item lg={4} md={6} sm={0} className="gridItem"
                          sx={{display: {xs: "none", sm: "none", md: "block"}}}>
                        <img src={flowerLImg} alt="flowerLImg" style={{width: "100%", maxWidth: "800px"}}/>
                    </Grid>

                    <Grid item lg={4} md={0} sm={0} className="gridItem"
                          sx={{display: {xs: "none", sm: "none", md: "none", lg: "block"}}}>
                        <img src={flowerLImg} alt="flowerLImg" style={{width: "100%", maxWidth: "800px"}}/>
                    </Grid>

                </Grid>
            </div>
        </ThemeProvider>
    )
        ;
}

export default App;
