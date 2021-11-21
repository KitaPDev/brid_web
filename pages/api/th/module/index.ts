import type { NextApiRequest, NextApiResponse } from "next";
import { ModuleData } from "../../../../interfaces/module";
import { prisma } from "../../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    let result: ModuleData[] = [];

    let modules = await prisma.module.findMany({
      include: {
        i18nModule: {
          where: {
            language: {
              isoTwoLetter: "th",
            },
          },
        },
      },
    });

    modules.forEach((module) => {
      const i18nModule = module.i18nModule.find(
        (i) => i.moduleId === module.id
      );

      let label = module.label;
      if (i18nModule) label = i18nModule.label;

      result.push({
        id: module.id,
        languageId: i18nModule?.languageId,
        label: label,
        displayOrder: module.displayOrder,
        mediaPath: module.mediaPath,
        content: i18nModule?.content,
      });
    });

    res.status(200).json({ data: result });
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
