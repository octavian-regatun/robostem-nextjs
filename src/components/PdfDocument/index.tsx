import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";

interface Props {
  file: string;
  onLoadSuccess?: any;
  pageNumber: number;
}

function Pdf({ file, pageNumber, onLoadSuccess }: Props) {
  return (
    <Document file={file} onLoadSuccess={onLoadSuccess}>
      <Page pageNumber={pageNumber} />
    </Document>
  );
}

export default Pdf;
