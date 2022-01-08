import type { NextApiRequest, NextApiResponse } from "next";
import { ContentModuleData, ModuleData } from "../../../interfaces/module";
import { prisma } from "../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let result: number[] = [];

  if (req.method === "GET") {
    let rows = await prisma.module.findMany({
      select: {
        id: true,
      },
    });

    rows.forEach((r) => result.push(r.id));

    res.status(200).json(result);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
