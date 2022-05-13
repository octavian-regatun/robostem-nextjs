import { Typography } from "@mui/material";
import ContentDivider from "../src/components/ContentDivider";
import Layout from "../src/components/Layout";
import PageContent from "../src/components/PageContent";
import EmailIcon from "@mui/icons-material/Email";

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
        <Typography variant="h6" style={emailStyle}>
          <EmailIcon style={iconStyle} />
          cristina_fulop@yahoo.com
        </Typography>
      </PageContent>
    </Layout>
  );
}

const iconStyle = {
  marginRight: "0.5rem",
};

const emailStyle = {
  align: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default ContactNextPage;
