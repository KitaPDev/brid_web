import type { NextApiRequest, NextApiResponse } from "next";
import { IndustryData } from "../../../../interfaces/industry";
import { prisma } from "../../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    let result: IndustryData[] = [];

    let industries = await prisma.industry.findMany({
      include: {
        i18nIndustry: {
          where: {
            language: {
              isoTwoLetter: "th",
            },
          },
        },
      },
    });

    industries.forEach((industry) => {
      const i18nIndustry = industry.i18nIndustry.find(
        (i) => i.industryId === industry.id
      );

      let label = industry.label;
      if (i18nIndustry) label = i18nIndustry.label;

      result.push({
        id: industry.id,
        languageId: i18nIndustry?.languageId,
        label: label,
        displayOrder: industry.displayOrder,
        mediaPath: industry.mediaPath,
        content: i18nIndustry?.content,
      });
    });

    res.status(200).json({ data: result });
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
