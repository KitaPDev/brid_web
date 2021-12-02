import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method === "GET") {
    const currentLocale = req.url?.split("/")[2];

    let career = await prisma.i18nCareer.findFirst({
      where: {
        careerId: parseInt(id[0]),
        language: {
          isoTwoLetter: currentLocale,
        },
      },
    });

    res.status(200).json(career);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
