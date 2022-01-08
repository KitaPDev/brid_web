import type { NextApiRequest, NextApiResponse } from "next";
import { CareerData } from "../../../../interfaces/careers";
import { prisma } from "../../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    let result: CareerData[] = [];
    const currentLocale = req.url?.split("/")[2];

    let careers = await prisma.career.findMany({
      include: {
        i18nCareer: {
          where: {
            language: {
              isoTwoLetter: currentLocale,
            },
          },
        },
      },
    });

    careers.forEach((career) => {
      const i18nCareer = career.i18nCareer.find(
        (i) => i.careerId === career.id
      );

      if (i18nCareer) {
        result.push({
          id: career.id,
          minYearExp: career.minYearExp,
          languageId: i18nCareer.languageId,
          title: i18nCareer.title,
          description: i18nCareer.description,
          requiredSkills: i18nCareer.requiredSkills,
          preferredSkills: i18nCareer.preferredSkills,
        });
      }
    });

    res.status(200).json(result);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
