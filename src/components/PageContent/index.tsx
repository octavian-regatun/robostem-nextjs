import { Container, Paper, Typography } from "@mui/material";
import ContentDivider from "../ContentDivider";

interface Props {
  children?: JSX.Element | JSX.Element[];
  title: string;
}

function PageContent({ children, title }: Props) {
  return (
    <Container maxWidth="md">
      <Paper elevation={5} style={paperStyle}>
        <Typography
          variant="h2"
          align="center"
          fontFamily="Comfortaa"
        >
          {title}
        </Typography>
        <ContentDivider />
        {children}
      </Paper>
    </Container>
  );
}

const paperStyle = {
  padding: "2rem 2rem",
};

export default PageContent;
