import YouTube from "react-youtube";
import ContentDivider from "../src/components/ContentDivider";
import Heading from "../src/components/Heading";
import Layout from "../src/components/Layout";
import PageContent from "../src/components/PageContent";

function LinksNextPage() {
  return (
    <Layout>
      <PageContent title="Links">
        <Heading align="center" variant="h6">
          Below you will find a number of useful links with video clips related
          to the objectives of the ROBOSTEM Project. Check these links to
          understand learn more about microcontrollers & STEM
        </Heading>
        <ContentDivider />
        <Heading align="center" variant="h4" style={headingStyle}>
          Introduction to Arduino
        </Heading>
        <YouTube videoId="1F0trDGSAQE" style={videoStyle} />
        <ContentDivider />
        <Heading align="center" variant="h4" style={headingStyle}>
          What is STEM?
        </Heading>
        <YouTube videoId="wRV28EOCGGo" style={videoStyle} />
      </PageContent>
    </Layout>
  );
}

const headingStyle = {
  marginBottom: "1rem",
};

const videoStyle = {
  display: "flex",
  justifyContent: "center",
};

export default LinksNextPage;
