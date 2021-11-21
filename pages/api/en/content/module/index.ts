import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../lib/prisma";
import { ModuleContent } from "../../../../../interfaces/module";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    let moduleContents: ModuleContent[] = [];

    let contentModules = await prisma.contentModule.findMany();

    let i18nContentModules = await prisma.i18nContentModule.findMany({
      where: {
        language: {
          isoTwoLetter: "en",
        },
      },
    });

    contentModules.forEach((cm) => {
      let i18nCm = i18nContentModules.find(
        (icm) => icm.contentModuleId === cm.id
      );

      let mc: ModuleContent = {
        id: cm.id,
        moduleId: cm.moduleId,
        languageId: i18nCm?.languageId,
        displayOrder: cm.displayOrder,
        content: i18nCm?.content,
        mediaPath: cm.mediaPath,
      };

      moduleContents.push(mc);
    });

    res.status(200).json({ moduleContents });
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
