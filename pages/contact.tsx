import { Typography } from "@mui/material";
import ContentDivider from "../src/components/ContentDivider";
import Layout from "../src/components/Layout";
import PageContent from "../src/components/PageContent";

function ContactNextPage() {
  return (
    <Layout>
      <PageContent title="Contact">
        <Typography variant="h6" align="center">
          If you need further information about this ROBOSTEM project, please
          contact the project coordinator Ms. Cristina Fulop as per details
          below.
        </Typography>
        <ContentDivider />
        <Typography variant="h6" align="center">
          Email: cristina_fulop@yahoo.com
        </Typography>
      </PageContent>
    </Layout>
  );
}

export default ContactNextPage;
