import { IconButton, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { CSSProperties } from "react";

interface Props {
  currentPage: number;
  totalPages: number;
  setCurrentPage: any;
}

function PdfPageSelector({
  currentPage: currentPage,
  totalPages: totalPages,
  setCurrentPage: setCurrentPage,
}: Props) {
  function onClick(action: "increment" | "decrement") {
    if (currentPage + 1 <= totalPages) setCurrentPage(currentPage + 1);

    if (action === "decrement")
      if (currentPage - 1 >= 1) setCurrentPage(currentPage - 1);
  }

  return (
    <div style={containerStyle}>
      <IconButton onClick={() => onClick("decrement")}>
        <KeyboardArrowLeftIcon />
      </IconButton>
      <Typography>
        Page {currentPage} of {totalPages}
      </Typography>
      <IconButton onClick={() => onClick("increment")}>
        <KeyboardArrowRightIcon />
      </IconButton>
    </div>
  );
}

const containerStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
};

export default PdfPageSelector;
