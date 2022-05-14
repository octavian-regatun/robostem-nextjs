import dynamic from "next/dynamic";
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
];

const Newsletter = dynamic(
  () => import("../src/components/NewsPage/Newsletter"),
  { ssr: false }
);

function NewsNextPage() {
  return (
    <Layout>
      <PageContent title="News">
        <Newsletter number={1} languages={newsletterLanguages[0]} />
        <Newsletter number={2} languages={newsletterLanguages[1]} />
      </PageContent>
    </Layout>
  );
}

export default NewsNextPage;
