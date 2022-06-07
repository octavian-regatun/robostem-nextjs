import { Container, Paper, Tab, Tabs } from "@mui/material";
import dynamic from "next/dynamic";
import Head from "next/head";
import { CSSProperties, useState } from "react";
import Layout from "../../src/components/Layout";
import LanguageButton from "../../src/components/NewsPage/LanguageButton";
import PdfPageSelector from "../../src/components/PdfPageSelector";
import Language from "../../src/types/language";

const PdfDocument = dynamic(() => import("../../src/components/PdfDocument"), {
  ssr: false,
});

const languages: Language[] = [
  Language.English,
  Language.Greek,
  Language.Portuguese,
  Language.Croatian,
  Language.Polish,
  Language.Romanian,
];

const modules = [
  "understanding microcontrollers",
  "getting the right tools",
  "choosing a motor controller",
  "assembling the device",
  "controlling the device",
  "using sensors",
];

const caseStudies = [
  "motion following camera",
  "tic-tac-toe game",
  "web-based two-player game",
  "temperature and ph measuring system",
  "kinematics and dynamics",
  "wireless hand gesture data",
  "3d printed robot",
  "weather station",
  "smart irrigation system",
];

export default () => {
  const [type, setType] = useState<"modules" | "case-studies">("modules");
  const [pdf, setPdf] = useState(0);
  const [language, setLanguage] = useState(Language.English);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  return (
    <>
      <Head>
        <title>RoboSTEM - Intellectual Output</title>
      </Head>
      <Layout>
        <div style={languagesContainer}>
          {languages.map((language) => (
            <LanguageButton
              key={`language-${language}`}
              language={language}
              setLanguage={setLanguage}
            />
          ))}
        </div>
        <Tabs value={type} onChange={(e, value) => setType(value)} centered>
          <Tab value="modules" label="Modules" />
          <Tab value="case-studies" label="Case Studies" />
        </Tabs>
        <Container maxWidth="lg" style={containerStyle}>
          {type === "modules" ? (
            <ModulesTabs pdf={pdf} setPdf={setPdf} />
          ) : (
            <CaseStudiesTabs pdf={pdf} setPdf={setPdf} />
          )}
          <Paper style={paperStyle}>
            <PdfDocument
              file={`/static/intellectual-outputs/1/${type}${
                type === "modules" ? `/${language}` : ""
              }/${pdf + 1}.pdf`}
              pageNumber={currentPage}
              setTotalPages={setTotalPages}
            ></PdfDocument>
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

function ModulesTabs({ pdf, setPdf }: any) {
  return (
    <Tabs
      value={pdf}
      onChange={(e, value) => setPdf(value)}
      orientation="vertical"
    >
      {modules.map((module, index) => (
        <Tab
          key={module}
          value={index}
          label={`${index + 1}. ${module}`}
          onClick={() => {
            setPdf(index);
          }}
        />
      ))}
    </Tabs>
  );
}

function CaseStudiesTabs({ pdf, setPdf }: any) {
  return (
    <Tabs
      value={pdf}
      onChange={(e, value) => setPdf(value)}
      orientation="vertical"
    >
      {caseStudies.map((caseStudy, index) => (
        <Tab
          key={caseStudy}
          value={index}
          label={`${index + 1}. ${caseStudy}`}
        />
      ))}
    </Tabs>
  );
}

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const languagesContainer: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  margin: "1rem 0",
};

const paperStyle: CSSProperties = {
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "end",
};
