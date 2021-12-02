import type { NextApiRequest, NextApiResponse } from "next";
import { ContentModuleData, ModuleData } from "../../../../interfaces/module";
import { prisma } from "../../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { id } = req.query;
    const currentLocale = req.url?.split("/")[2];

    let module = await prisma.module.findFirst({
      where: {
        id: parseInt(id[0]),
      },
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
      where: {
        id: parseInt(id[0]),
      },
      include: {
        i18nContentModule: {
          where: {
            language: {
              isoTwoLetter: currentLocale,
            },
          },
        },
      },
    });

    if (module === null) return res.status(200).json({});

    const i18nModule = module.i18nModule.find((i) => i.moduleId === module?.id);

    let label = module.label;
    if (i18nModule) label = i18nModule.label;

    let contentData: ContentModuleData[] = [];
    contentModules.forEach((cm) => {
      if (cm.moduleId === module?.id) {
        let data: ContentModuleData = {
          id: cm.id,
          moduleId: module.id,
          displayOrder: cm.displayOrder,
          mediaPath: cm.mediaPath || "",
          content:
            cm.i18nContentModule.find((icm) => icm.contentModuleId === cm.id)
              ?.content || "",
        };

        contentData.push(data);
      }
    });

    const result: ModuleData = {
      id: module.id,
      languageId: i18nModule?.languageId,
      label: label,
      description: i18nModule?.description || "",
      contentData: contentData,
    };

    res.status(200).json(result);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
