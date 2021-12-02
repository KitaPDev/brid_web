import { Language } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { LanguageData } from "../../../interfaces/language";
import { prisma } from "../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    let languages: LanguageData[] = await prisma.language.findMany();

    res.status(200).json(languages);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
