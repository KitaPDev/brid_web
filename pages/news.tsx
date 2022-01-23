import News from "../components/News/News";
import NavBar from "../components/NavBar/NavBar";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import http from "../lib/http";
import { NewsData } from "../interfaces/news";
import Footer from "../components/Footer/Footer";

function NewsPage({ news }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NavBar />
      <News news={news} />
      <hr />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  let resp = await http.get(`/${locale}/news`);
  let news: NewsData[] = resp.data;

  return {
    props: {
      ...(await serverSideTranslations(locale ? locale : "en", [
        "navbar",
        "news",
        "footer",
      ])),
      news,
      revalidate: 60,
    },
  };
};

export default NewsPage;
