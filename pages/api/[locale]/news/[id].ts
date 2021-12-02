import type { NextApiRequest, NextApiResponse } from "next";
import { ContentNewsData, NewsData } from "../../../../interfaces/news";
import { prisma } from "../../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { id } = req.query;
    const currentLocale = req.url?.split("/")[2];

    let news = await prisma.news.findFirst({
      where: {
        id: parseInt(id[0]),
      },
      include: {
        i18nNews: {
          where: {
            language: {
              isoTwoLetter: currentLocale,
            },
          },
        },
      },
    });

    let contentNews = await prisma.contentNews.findMany({
      where: {
        id: parseInt(id[0]),
      },
      include: {
        i18nContentNews: {
          where: {
            language: {
              isoTwoLetter: currentLocale,
            },
          },
        },
      },
    });

    if (news === null) return res.status(200).json({});

    const i18nNews = news.i18nNews.find((i) => i.newsId === news?.id);

    let label = news.label;
    if (i18nNews) label = i18nNews.label;

    let contentData: ContentNewsData[] = [];
    contentNews.forEach((cn) => {
      if (cn.newsId === news?.id) {
        let content: ContentNewsData = {
          id: cn.id,
          newsId: news.id,
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

    const result: NewsData = {
      id: news.id,
      languageId: i18nNews?.languageId,
      label: label,
      postedAt: news.postedAt,
      contentData: contentData,
    };

    res.status(200).json(result);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
