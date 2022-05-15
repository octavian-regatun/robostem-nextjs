import Language from "../../../types/language";
import Heading from "../../Heading";
import { getLanguageImage } from "../../../utilities/getLanguageImage";
import LanguageButton from "../LanguageButton";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import { CSSProperties, useContext, useState } from "react";
import PdfPageSelector from "../../PdfPageSelector";

interface Props {
  number: number;
  languages: Language[];
  defaultLanguage: Language;
}

function Newsletter({ number, languages, defaultLanguage }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [language, setLanguage] = useState(defaultLanguage);

  function onLoadSuccess({ numPages }: { numPages: number }) {
    setTotalPages(numPages);
  }

  return (
    <div style={containerStyle}>
      <Heading variant="h4" align="center">
        Newsletter {number}
      </Heading>
      <div style={buttonsContainerStyle}>
        {languages.map((language) => (
          <LanguageButton
            key={language}
            language={language}
            setLanguage={setLanguage}
            sx={buttonStyle}
          />
        ))}
      </div>
      <div style={pdfContainerStyle}>
        <Document
          file={`static/newsletters/${number}/${language}.pdf`}
          onLoadSuccess={onLoadSuccess}
        >
          <Page pageNumber={currentPage} height={600} />
        </Document>
      </div>
      <PdfPageSelector
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

const containerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const buttonsContainerStyle = {
  margin: "1rem 0",
};

const pdfContainerStyle: CSSProperties = {
  marginBottom: "1rem",
};

const buttonStyle = {
  "&:not(:last-child)": {
    marginRight: "1rem",
  },
};

export default Newsletter;
