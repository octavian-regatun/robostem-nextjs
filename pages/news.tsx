import dynamic from "next/dynamic";
import Head from "next/head";
import ContentDivider from "../src/components/ContentDivider";
import Layout from "../src/components/Layout";
import PageContent from "../src/components/PageContent";
import Language from "../src/types/language";

const newsletterLanguages = [
  [
    Language.English,
    Language.Greek,
    Language.Portuguese,
    Language.Croatian,
    Language.Polish,
    Language.Romanian,
  ],
  [Language.Romanian, Language.English, Language.Portuguese, Language.Polish],
  [Language.Romanian, Language.Polish, Language.Greek],
];

const Newsletter = dynamic(
  () => import("../src/components/NewsPage/Newsletter"),
  { ssr: false }
);

function NewsNextPage() {
  return (
    <>
      <Head>
        <title>RoboSTEM - News</title>
      </Head>
      <Layout>
        <PageContent title="News">
          <Newsletter
            number={1}
            languages={newsletterLanguages[0]}
            defaultLanguage={Language.English}
          />
          <ContentDivider />
          <Newsletter
            number={2}
            languages={newsletterLanguages[1]}
            defaultLanguage={Language.English}
          />
          <ContentDivider />
          <Newsletter
            number={3}
            languages={newsletterLanguages[2]}
            defaultLanguage={Language.Romanian}
          />
        </PageContent>
      </Layout>
    </>
  );
}

export default NewsNextPage;
