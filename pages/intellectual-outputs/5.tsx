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
  "Electrical Components Explanation",
  "Microcontroller Introduction",
  "Robotic Arm Introduction",
  "Chemistry",
  "IT Robotics",
  "Physics",
  "Programming IF",
  "Application of microcontrollers – examples",
  "'Do it yourself' - application",
  "Introduction to microcontrollers",
  "Microcontroller programming",
  "Application of microcontrollers in Industrial Robotics",
  "Application of microcontrollers in Manufacturing Automation",
  "Application of microcontrollers in Smart Farming",
  "Building circuits in Arduino",
  "Cycles in Arduino",
  "Int Arduino",
  "Designing a microcontroller",
  "Using a DC motor in Arduino",
  "Using a potentiometer in Arduino",
  "Using buttons in Arduino",
  "Arduino Programming",
  "On Off Lights",
  "Physics 1",
  "Physics 2",
  "Solar Powered car",
  "Int Arduino",
  "Blinking LED",
  "Temperature Sensor",
  "Water Sensor",
];

const languages: Language[][] = [
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
  [
    Language.English,
    Language.Greek,
    Language.Croatian,
    Language.Polish,
    Language.Portuguese,
    Language.Romanian,
  ],
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
              file={`/static/intellectual-outputs/5/${language}/${pdf + 1}.pdf`}
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
