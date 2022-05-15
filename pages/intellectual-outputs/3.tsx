import { Container, Paper, Tab, Tabs } from "@mui/material";
import dynamic from "next/dynamic";
import { CSSProperties, useState } from "react";
import Layout from "../../src/components/Layout";
import LanguageButton from "../../src/components/NewsPage/LanguageButton";
import PageContent from "../../src/components/PageContent";
import PdfPageSelector from "../../src/components/PdfPageSelector";
import Language from "../../src/types/language";

const tabs = [
  "Arsakeio - Arduino Indoor Hydroponic Farming System",
  "Arsakeio - Arduino pH measuring  System",
  "Danmar - Arduino Watering System",
  "Ludor - Arduino Robotic Arm",
  "LIIS - Boosting programming skills with microcontrollers",
  "STSFV - Christmas Lights",
  "STSFV - Traffic Lights",
];

const languages: Language[][] = [
  [
    Language.Romanian,
    Language.Portuguese,
    Language.Greek,
    Language.Polish,
    Language.English,
  ],
  [
    Language.Romanian,
    Language.Portuguese,
    Language.Greek,
    Language.Polish,
    Language.English,
  ],
  [
    Language.Romanian,
    Language.Portuguese,
    Language.Greek,
    Language.Polish,
    Language.English,
  ],
  [
    Language.Romanian,
    Language.Portuguese,
    Language.Greek,
    Language.Polish,
    Language.English,
  ],
  [
    Language.Romanian,
    Language.Portuguese,
    Language.Greek,
    Language.Polish,
    Language.English,
  ],
  [Language.Romanian, Language.Portuguese, Language.Greek, Language.English],
  [Language.English],
];

const PdfDocument = dynamic(() => import("../../src/components/PdfDocument"), {
  ssr: false,
});

export default () => {
  const [pdf, setPdf] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [language, setLanguage] = useState(Language.English);

  return (
    <Layout>
      <Container maxWidth="lg" style={containerStyle}>
        <Tabs
          orientation="vertical"
          value={pdf}
          onChange={(e, value) => {
            setPdf(value);
            setLanguage(Language.English);
          }}
        >
          {tabs.map((tab, index) => (
            <Tab key={tab} label={tab} value={index} />
          ))}
        </Tabs>
        <Paper style={paperStyle}>
          <div style={languagesContainerStyle}>
            {languages[pdf].map((language, index) => (
              <LanguageButton
                key={`${language}-${index}`}
                language={language}
                setLanguage={setLanguage}
              />
            ))}
          </div>
          <PdfDocument
            file={`/static/intellectual-outputs/3/${language}/${pdf + 1}.pdf`}
            pageNumber={currentPage}
            setTotalPages={setTotalPages}
          />
          <PdfPageSelector
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </Paper>
      </Container>
    </Layout>
  );
};

const containerStyle = {
  display: "flex",
};

const paperStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  paddingBottom: "1rem",
};

const languagesContainerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  margin: "1rem 0",
};
