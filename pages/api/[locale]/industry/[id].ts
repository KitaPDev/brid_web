import type { NextApiRequest, NextApiResponse } from "next";
import {
  ContentIndustryData,
  IndustryData,
} from "../../../../interfaces/industry";
import { prisma } from "../../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { id } = req.query;
    const currentLocale = req.url?.split("/")[2];

    let industry = await prisma.industry.findFirst({
      where: {
        id: parseInt(id[0]),
      },
      include: {
        i18nIndustry: {
          where: {
            language: {
              isoTwoLetter: req.url?.split("/")[2],
            },
          },
        },
      },
    });

    let contentIndustries = await prisma.contentIndustry.findMany({
      where: {
        industryId: parseInt(id[0]),
      },
      include: {
        i18nContentIndustry: {
          where: {
            language: {
              isoTwoLetter: currentLocale,
            },
          },
        },
      },
    });

    if (industry === null) return res.status(200).json({});

    const i18nIndustry = industry.i18nIndustry.find(
      (i) => i.industryId === industry?.id
    );

    let label = industry.label;
    if (i18nIndustry) label = i18nIndustry.label;

    let contentData: ContentIndustryData[] = [];
    contentIndustries.forEach((ci) => {
      if (ci.industryId === industry?.id) {
        let content: ContentIndustryData = {
          id: ci.id,
          industryId: industry.id,
          displayOrder: ci.displayOrder,
          mediaPath: ci.mediaPath || "",
          content:
            ci.i18nContentIndustry.find(
              (ici) => ici.contentIndustryId === ci.id
            )?.content || "",
        };

        contentData.push(content);
      }
    });

    const result: IndustryData = {
      id: industry.id,
      languageId: i18nIndustry?.languageId,
      label: label,
      contentData: contentData,
    };

    res.status(200).json(result);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
