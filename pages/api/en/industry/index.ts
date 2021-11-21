import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    let industries = await prisma.i18nIndustry.findMany({
      where: {
        language: {
          isoTwoLetter: "en",
        },
      },
    });

    res.status(200).json({ industries });
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
