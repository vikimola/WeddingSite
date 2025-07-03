import {createTheme, ThemeProvider} from "@mui/material/styles";
import type {ThemeOptions} from "@mui/material";
import {Button, Grid, Typography} from "@mui/material";
import flowerLImg from "../src/static/flowers/FlowerLarge.png";
import timetable2 from "./static/TimetableSM/Program2.png"
import timetableHR_hu from "./static/TimetableHR/Timetable_hu.png"
import timetableHR_ro from "./static/TimetableHR/Timetable_ro.png"
import timetableHR_en from "./static/TimetableHR/Timetable_en.png"
import LanguageSelector from "./components/LanguageSelector.tsx";
import {useTranslation} from "react-i18next";

import {Suspense} from "react";


const paletteTheme: ThemeOptions = {
    palette: {
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

        button: {
            textTransform: 'none'
        }
    },

};

function App() {

    const {i18n} = useTranslation();
    const timetableImgs: Record<string, string> = {
        hu: timetableHR_hu,
        ro: timetableHR_ro,
        en: timetableHR_en
    }
    const currentLang = i18n.language;
    const timatableImg = timetableImgs[currentLang] || timetableHR_hu;


    const {t} = useTranslation();

    const initialGreeting = useTranslation("initialGreeting");
    const feedbackBtn = t('feedbackBtn');
    const date = t("date");
    const accommodationInfosTBC = t("accommodationInfosTBC");


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

                <LanguageSelector/>



                <br/>
                <br/>
                <Typography variant="h1" className="titleText">Vik & Gerő</Typography>
                <br/>
                <br/>


                <Typography variant="h5" className="greenText">{t("initialGreeting")}</Typography>

                <br/>
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
                    <Typography variant="h6">{feedbackBtn}</Typography>
                </Button>


                <br/>
                <br/>

                <Typography variant="h5" className="brownText">{date}</Typography>

                <br/>

                <img src={timatableImg} alt="program" className="programImg"/>

                <br/>
                <br/>

                <Typography variant="p" className="greenText">
                    {accommodationInfosTBC}</Typography>

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
