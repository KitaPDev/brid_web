import News from "../components/News/News";
import NavBar from "../components/NavBar/NavBar";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ContentNewsData, NewsData } from "../interfaces/news";
import Footer from "../components/Footer/Footer";
import { prisma } from "../lib/prisma";

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
  let news: NewsData[] = [];

  let pmNews = await prisma.news.findMany({
    include: {
      i18nNews: {
        where: {
          language: {
            isoTwoLetter: locale,
          },
        },
      },
    },
    orderBy: {
      postedAt: "desc",
    },
  });

  let pmContentNews = await prisma.contentNews.findMany({
    include: {
      i18nContentNews: {
        where: {
          language: {
            isoTwoLetter: locale,
          },
        },
      },
    },
  });

  pmNews.forEach((n) => {
    const i18nNews = n.i18nNews.find((i) => i.newsId === n.id);

    let label = n.label;
    if (i18nNews) label = i18nNews.label;

    let contentData: ContentNewsData[] = [];
    pmContentNews.forEach((cn) => {
      if (cn.newsId === n.id) {
        let content: ContentNewsData = {
          id: cn.id,
          newsId: n.id,
          displayOrder: cn.displayOrder,
          mediaPath: cn.mediaPath,
          youtubeEmbedId: cn.youtubeEmbedId,
          content:
            cn.i18nContentNews.find((icn) => icn.contentNewsId === cn.id)
              ?.content || "",
        };

        contentData.push(content);
      }
    });

    news.push({
      id: n.id,
      languageId: i18nNews?.languageId,
      label: label,
      postedAt: n.postedAt,
      contentData: contentData,
    });
  });

  return {
    props: {
      ...(await serverSideTranslations(locale ? locale : "en", [
        "navbar",
        "news",
        "footer",
      ])),
      news,
    },
    revalidate: 60,
  };
};

export default NewsPage;
