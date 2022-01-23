import NavBar from "../components/NavBar/NavBar";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Support from "../components/Support/Support";
import { FaqData } from "../interfaces/support";
import Footer from "../components/Footer/Footer";
import { prisma } from "../lib/prisma";

function SupportPage({ faqs }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NavBar />
      <Support faqs={faqs} />
      <hr />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  let result: FaqData[] = [];

  let faqs = await prisma.faq.findMany({
    include: {
      i18nFaq: {
        where: {
          language: {
            isoTwoLetter: locale,
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

  return {
    props: {
      ...(await serverSideTranslations(locale ? locale : "en", [
        "navbar",
        "support",
        "footer",
      ])),
      result,
    },
    revalidate: 60,
    notFound: true,
  };
};

export default SupportPage;
