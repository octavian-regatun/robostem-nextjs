import { Button } from "@mui/material";
import Link from "next/link";

function IOButton({ number }: { number: number }) {
  return (
    <Link href={`intelectual-output/${number}`}>
      <Button variant="contained" color="black" sx={buttonStyle}>
        Intellectual Output {number}
      </Button>
    </Link>
  );
}

const buttonStyle = {
  margin: "0.5rem 1rem 0.5rem 0",
};

export default IOButton;
