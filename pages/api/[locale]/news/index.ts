import type { NextApiRequest, NextApiResponse } from "next";
import { NewsData } from "../../../../interfaces/news";
import { prisma } from "../../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    let result: NewsData[] = [];

    let news = await prisma.news.findMany({
      include: {
        i18nNews: {
          where: {
            language: {
              isoTwoLetter: req.url?.split("/")[2],
            },
          },
        },
      },
    });

    news.forEach((n) => {
      const i18nNews = n.i18nNews.find((i) => i.newsId === n.id);

      let label = n.label;
      if (i18nNews) label = i18nNews.label;

      result.push({
        id: n.id,
        languageId: i18nNews?.languageId,
        label: label,
        displayOrder: n.displayOrder,
        mediaPath: n.mediaPath,
        youtubeEmbedId: n.youtubeEmbedId,
        postedAt: n.postedAt,
        content: i18nNews?.content,
      });
    });

    res.status(200).json({ data: result });
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
