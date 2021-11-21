import type { NextApiRequest, NextApiResponse } from "next";
import { NewsData } from "../../../../interfaces/news";
import { prisma } from "../../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { id } = req.query;

    let news = await prisma.news.findFirst({
      where: {
        id: parseInt(id[0]),
      },
      include: {
        i18nNews: {
          where: {
            language: {
              isoTwoLetter: "th",
            },
          },
        },
      },
    });

    if (news === null) return res.status(200).json({ data: {} });

    const i18nNews = news.i18nNews.find((i) => i.newsId === news?.id);

    let label = news.label;
    if (i18nNews) label = i18nNews.label;

    const result: NewsData = {
      id: news.id,
      languageId: i18nNews?.languageId,
      label: label,
      displayOrder: news.displayOrder,
      mediaPath: news.mediaPath,
      youtubeEmbedId: news.youtubeEmbedId,
      postedAt: news.postedAt,
      content: i18nNews?.content,
    };

    res.status(200).json({ data: result });
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
