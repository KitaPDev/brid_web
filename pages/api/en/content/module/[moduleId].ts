import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../lib/prisma";
import { ModuleContent } from "../../../../../interfaces/module";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { moduleId } = req.query;

    let cm = await prisma.contentModule.findFirst({
      where: {
        moduleId: parseInt(moduleId[0]),
      },
    });

    let icm = await prisma.i18nContentModule.findFirst({
      where: {
        contentModuleId: cm?.id,
        language: {
          isoTwoLetter: "en",
        },
      },
    });

    if (cm !== null) {
      let moduleContent: ModuleContent = {
        id: cm.id,
        moduleId: cm.moduleId,
        languageId: icm?.languageId,
        displayOrder: cm.displayOrder,
        content: icm?.content,
        mediaPath: cm.mediaPath,
      };

      res.status(200).json({ moduleContent });
    } else {
      res.status(200).json({});
    }
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
