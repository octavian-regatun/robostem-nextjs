import { ExpandMoreOutlined } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import IOButton from "../../IOButton";

interface Props {
  ioNumber: number;
  title: string;
  children: JSX.Element | JSX.Element[];
}

function CustomAccordion({ ioNumber, title, children }: Props) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
        <Typography variant="h6">
          <IOButton number={ioNumber} />
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}

export default CustomAccordion;
