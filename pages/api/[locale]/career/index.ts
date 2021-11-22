import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    let careers = await prisma.i18nCareer.findMany({
      where: {
        language: {
          isoTwoLetter: req.url?.split("/")[2],
        },
      },
    });

    res.status(200).json({ data: careers });
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
