import type { NextApiRequest, NextApiResponse } from "next";
import { FaqData } from "../../../../interfaces/support";
import { prisma } from "../../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    let result: FaqData[] = [];
    const currentLocale = req.url?.split("/")[2];

    let faqs = await prisma.faq.findMany({
      include: {
        i18nFaq: {
          where: {
            language: {
              isoTwoLetter: currentLocale,
            },
          },
        },
      },
      orderBy: {
        displayOrder: "asc",
      },
    });

    faqs.forEach((faq) => {
      const i18nFaq = faq.i18nFaq.find((i) => i.faqId === faq.id);

      result.push({
        id: faq.id,
        languageId: i18nFaq?.languageId,
        displayOrder: faq.displayOrder,
        question: i18nFaq?.question,
        answer: i18nFaq?.answer,
      });
    });

    res.status(200).json(result);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
