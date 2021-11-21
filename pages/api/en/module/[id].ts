import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method === "GET") {
    let module = await prisma.i18nModule.findMany({
      where: {
        moduleId: parseInt(id[0]),
        language: {
          isoTwoLetter: "en",
        },
      },
    });

    res.status(200).json({ module });
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}