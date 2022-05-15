import { Container, Paper, Tab, Tabs } from "@mui/material";
import dynamic from "next/dynamic";
import { CSSProperties, useState } from "react";
import Layout from "../../src/components/Layout";
import LanguageButton from "../../src/components/NewsPage/LanguageButton";
import PageContent from "../../src/components/PageContent";
import PdfPageSelector from "../../src/components/PdfPageSelector";
import Language from "../../src/types/language";

const tabs = [
  "SVF - Student Journal",
  "LIIS - Device Description",
  "LIIS - Student Journal",
  "Arsakeio - Student Journal 1",
  "Arsakeio - Student Journal 2",
  "Arsakeio - Student Journal 3",
];

const languages: Language[][] = [
  [Language.Greek, Language.English],
  [Language.Romanian, Language.Greek, Language.English],
  [Language.Romanian, Language.Greek, Language.English],
  [Language.Greek, Language.English],
  [Language.Greek, Language.English],
  [Language.Greek, Language.English],
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
            file={`/static/intellectual-outputs/4/${language}/${pdf + 1}.pdf`}
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
