import {createTheme, ThemeProvider} from "@mui/material/styles";
import {makeStyles} from "@mui/styles";
import type {ThemeOptions} from "@mui/material";
import flowerSImg from "../src/static/flowers/FlowerSmall.png";
import flowerLImg from "../src/static/flowers/FlowerLarge.png";
import program from "../src/static/Program.png"
import upperFlower from "../src/static/flowers/upperFlower.png"
import {Grid, Typography, useMediaQuery, Theme, Button} from "@mui/material";
import {useTheme} from '@material-ui/core/styles';

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
        fontFamily: "'Noto Serif Ethiopic', cursive",
        h1: {
            fontFamily: "'Great Vibes', cursive",
            color: "#b6693d",
            fontSize: "4rem",
            "@media (min-width:650px)": {
                fontSize: "5rem",
            },
            "@media (min-width:800px)": {
                fontSize: "7rem",
            },
            "@media (min-width:1280px)": {
                fontSize: "9rem",
            },
        },

        h6: {
            // color: "#b6693d",
            fontSize: "1rem",
            "@media (min-width:650px)": {
                fontSize: "1.3rem",
            },
            "@media (min-width:800px)": {
                fontSize: "1.5rem",
            },
            "@media (min-width:1280px)": {
                fontSize: "1.8rem",
            },
        }

    },
};

function App() {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up(theme.breakpoints.values.md));


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

                <div className="avgDiv">
                    <Typography variant="h1" className="titleText">Vik & Gerő</Typography>
                </div>
                <br/>


                <div className="avgDiv">
                    <Typography variant="h6" className="greetingText">Köszönjük hogy meglátogattad a
                        weboldalunkat!</Typography>
                </div>

                <br/>

                <div className="avgDiv">
                    <Button
                        variant="outlined"
                        sx={{
                            color: "#655f1a",
                            borderColor: "#b6693d",

                            "&:hover": {
                                color: "#b6693d",
                                borderColor: "#485935",
                            }
                        }}
                        href="https://docs.google.com/forms/d/e/1FAIpQLScC_4RoHd--PYRHb81cJsq9S11JEhWaYsQSV00X_Hl-dQxTpg/viewform"

                        target="_blank"
                    >

                        Visszajelzek!
                    </Button>

                </div>

                <br/>


                <div className="avgDiv">
                    <img src={program} alt="program" className="programImg"/>
                </div>
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
