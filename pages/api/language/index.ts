import type { NextApiRequest, NextApiResponse } from "next";
import { LanguageData } from "../../../interfaces/language";
import { prisma } from "../../../lib/prisma";
import NextCors from "nextjs-cors";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  if (req.method === "GET") {
    let languages: LanguageData[] = await prisma.language.findMany();

    res.status(200).json(languages);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
