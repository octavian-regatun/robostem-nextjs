import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";

interface Props {
  file: string;
  pageNumber: number;
  setTotalPages?: any;
}

function PdfDocument({ file, pageNumber, setTotalPages }: Props) {
  return (
    <Document
      file={file}
      onLoadSuccess={({ numPages }) => setTotalPages(numPages)}
    >
      <Page pageNumber={pageNumber} />
    </Document>
  );
}

export default PdfDocument;
