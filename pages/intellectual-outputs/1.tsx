import { Container, Paper, Tab, Tabs } from "@mui/material";
import dynamic from "next/dynamic";
import { CSSProperties, useState } from "react";
import Layout from "../../src/components/Layout";
import PdfPageSelector from "../../src/components/PdfPageSelector";
import Language from "../../src/types/language";

const Pdf = dynamic(() => import("../../src/components/PdfDocument"), {
  ssr: false,
});

const languages: Language = [
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
  const [type, setType] = useState<"modules" | "caseStudies">("modules");
  const [pdf, setPdf] = useState(0);
  const [language, setLanguage] = useState(Language.English);

  return (
    <Layout>
      <Tabs value={type} onChange={(e, value) => setType(value)} centered>
        <Tab value="modules" label="Modules" />
        <Tab value="caseStudies" label="Case Studies" />
      </Tabs>
      <Container maxWidth="lg" style={containerStyle}>
        <Tabs
          value={pdf}
          onChange={(e, value) => setPdf(value)}
          orientation="vertical"
        >
          {type === "modules" ? <ModulesTabs /> : <CaseStudiesTabs />}
        </Tabs>
        <Paper style={paperStyle}>
          <Pdf
            file={`/static/intellectual-outputs/1/case-studies/1.pdf`}
            pageNumber={1}
          ></Pdf>
          <PdfPageSelector
            currentPage={1}
            totalPages={2}
            setCurrentPage={() => {}}
          />
        </Paper>
      </Container>
    </Layout>
  );
};

function ModulesTabs() {
  return (
    <>
      {modules.map((module, index) => (
        <Tab key={module} value={index} label={`${index + 1}. ${module}`} />
      ))}
    </>
  );
}

function CaseStudiesTabs() {
  return (
    <>
      {caseStudies.map((caseStudy, index) => (
        <Tab
          key={caseStudy}
          value={index}
          label={`${index + 1}. ${caseStudy}`}
        />
      ))}
    </>
  );
}

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const paperStyle: CSSProperties = {
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "end",
};
