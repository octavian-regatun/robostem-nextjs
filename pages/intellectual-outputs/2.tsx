import { Container, Paper, Tab, Tabs } from "@mui/material";
import dynamic from "next/dynamic";
import Head from "next/head";
import { CSSProperties, useState } from "react";
import Layout from "../../src/components/Layout";
import LanguageButton from "../../src/components/NewsPage/LanguageButton";
import PageContent from "../../src/components/PageContent";
import PdfPageSelector from "../../src/components/PdfPageSelector";
import Language from "../../src/types/language";

const tabs = [
  "LIIS - variant 2",
  "LIIS - variant 1",
  "Robotic Arm",
  "Touch Glove",
  "Studying the kinematics of simple harmonic oscillator",
  "STSFV",
];

const languages: Language[][] = [
  [Language.English, Language.Greek, Language.Romanian],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
  ],
  [Language.English, Language.Greek, Language.Romanian],
  [Language.English, Language.Greek, Language.Romanian],
  [Language.English, Language.Romanian],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
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
    <>
      <Head>
        <title>RoboSTEM - Intellectual Output</title>
      </Head>
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
              file={`/static/intellectual-outputs/2/${language}/${pdf + 1}.pdf`}
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
    </>
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
