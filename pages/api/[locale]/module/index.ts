import type { NextApiRequest, NextApiResponse } from "next";
import { ContentModuleData, ModuleData } from "../../../../interfaces/module";
import { prisma } from "../../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    let result: ModuleData[] = [];
    const currentLocale = req.url?.split("/")[2];

    let modules = await prisma.module.findMany({
      include: {
        i18nModule: {
          where: {
            language: {
              isoTwoLetter: currentLocale,
            },
          },
        },
      },
    });

    let contentModules = await prisma.contentModule.findMany({
      include: {
        i18nContentModule: {
          where: {
            language: {
              isoTwoLetter: currentLocale,
            },
          },
        },
      },
      orderBy: {
        displayOrder: "asc",
      },
    });

    modules.forEach((module) => {
      const i18nModule = module.i18nModule.find(
        (i) => i.moduleId === module.id
      );

      let label = module.label;
      if (i18nModule) label = i18nModule.label;

      let contentData: ContentModuleData[] = [];
      contentModules.forEach((cm) => {
        if (cm.moduleId === module.id) {
          let content: ContentModuleData = {
            id: cm.id,
            moduleId: module.id,
            displayOrder: cm.displayOrder,
            mediaPath: cm.mediaPath || "",
            content:
              cm.i18nContentModule.find((icm) => icm.contentModuleId === cm.id)
                ?.content || "",
          };

          contentData.push(content);
        }
      });

      result.push({
        id: module.id,
        languageId: i18nModule?.languageId,
        label: label,
        description: i18nModule?.description || "",
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
