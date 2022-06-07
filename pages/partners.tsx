import Head from "next/head";
import Layout from "../src/components/Layout";
import PageContent from "../src/components/PageContent";
import Partner, { Location } from "../src/components/PartnersPage/Partner";
import {
  ARSAKEIO_LYCEUM_OF_PATRA_IMAGE,
  DANMAR_COMPUTERS_IMAGE,
  FAUSTA_VRANCICA_IMAGE,
  LIIS_IMAGE,
  LUDOR_ENGINEERING_IMAGE,
  MECB_IMAGE,
  UNIVERSIDADE_PORTUCALENSE_IMAGE,
} from "../src/utilities/constants/images";

function PartnersNextPage() {
  return (
    <>
      <Head>
        <title>RoboSTEM - Partners</title>
      </Head>
      <Layout>
        <PageContent title="Partners">
          <Partner
            src={LIIS_IMAGE}
            name='Liceul Teoretic de Informatică "Grigore Moisil"'
            location={Location.Romania}
          />
          <Partner
            src={MECB_IMAGE}
            name="Macdac Engineering Consultancy Bureau LTD - MECB"
            location={Location.Malta}
          />
          <Partner
            src={LUDOR_ENGINEERING_IMAGE}
            name="S.C. Ludor Engineering, S.R.L."
            location={Location.Romania}
          />
          <Partner
            src={DANMAR_COMPUTERS_IMAGE}
            name="Danmar Computers SP. Z O.O."
            location={Location.Poland}
          />
          <Partner
            src={UNIVERSIDADE_PORTUCALENSE_IMAGE}
            name="Universidade Portucalense Infante D. HENRIQUE - Cooperativa De Ensino Superior, C.R.L."
            location={Location.Portugal}
          />
          <Partner
            src={FAUSTA_VRANCICA_IMAGE}
            name="Strojarska Tehnička Škola Fausta Vrančića"
            location={Location.Croatia}
          />
          <Partner
            src={ARSAKEIO_LYCEUM_OF_PATRA_IMAGE}
            name="Arsakeio Lyceum of Patras"
            location={Location.Greece}
          />
        </PageContent>
      </Layout>
    </>
  );
}

export default PartnersNextPage;
