import {useEffect, useState} from "react";
import i18next from "i18next";
import {useTranslation} from "react-i18next";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import * as React from "react";

type languageOption = { language: string; code: string };

const languageOptions: languageOption[] = [

    {language: "Magyar", code: "hu"},
    {language: "Română", code: "ro"},
    {language: "English", code: "en"}
];

const LanguageSelector = () => {
    const [language, setLanguage] = useState<string>(i18next.language as string);

    const {i18n} = useTranslation();

    const handleLanguageChange = (selectedLanguage: string) => {
        setLanguage(selectedLanguage);
        i18next.changeLanguage(selectedLanguage);
    };

    useEffect(() => {
        document.body.dir = i18n.dir();
    }, [i18n, i18n.language]);


    return (

        <ButtonGroup variant="outlined" color="primary" size="small">
            {languageOptions.map(({language, code}, key) => (
                <Button key={code} onClick={() => handleLanguageChange(code)}>
                    {language}
                </Button>
            ))}
        </ButtonGroup>
    );
};

export default LanguageSelector;