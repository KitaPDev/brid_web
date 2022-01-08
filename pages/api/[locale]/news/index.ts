import type { NextApiRequest, NextApiResponse } from "next";
import { ContentNewsData, NewsData } from "../../../../interfaces/news";
import { prisma } from "../../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    let result: NewsData[] = [];
    const currentLocale = req.url?.split("/")[2];

    let news = await prisma.news.findMany({
      include: {
        i18nNews: {
          where: {
            language: {
              isoTwoLetter: currentLocale,
            },
          },
        },
      },
      orderBy: {
        postedAt: "desc",
      },
    });

    let contentNews = await prisma.contentNews.findMany({
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

    news.forEach((n) => {
      const i18nNews = n.i18nNews.find((i) => i.newsId === n.id);

      let label = n.label;
      if (i18nNews) label = i18nNews.label;

      let contentData: ContentNewsData[] = [];
      contentNews.forEach((cn) => {
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

      result.push({
        id: n.id,
        languageId: i18nNews?.languageId,
        label: label,
        postedAt: n.postedAt,
        contentData: contentData,
      });
    });

    res.status(200).json(result);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
