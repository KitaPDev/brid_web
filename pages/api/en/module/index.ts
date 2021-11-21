import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    let modules = await prisma.i18nModule.findMany({
      where: {
        language: {
          isoTwoLetter: "en",
        },
      },
    });

    res.status(200).json({ i18nModules: modules });
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
