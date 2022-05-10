import { Container, Paper, Typography } from "@mui/material";

interface Props {
  children?: JSX.Element | JSX.Element[];
  title: string;
}

function PageContent({ children, title }: Props) {
  return (
    <Container maxWidth="lg">
      <Paper elevation={5}>
        <Typography
          style={titleStyle}
          variant="h2"
          align="center"
          fontFamily="Comfortaa"
        >
          {title}
        </Typography>
        <div style={contentStyle}>{children}</div>
      </Paper>
    </Container>
  );
}

const titleStyle = {
  padding: "2rem 0",
  margin: "0 2rem",
  borderBottom: "2px solid black",
};
const contentStyle = {
  padding: "2rem 2rem",
};

export default PageContent;
