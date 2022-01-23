import NavBar from "../components/NavBar/NavBar";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CareerData } from "../interfaces/careers";
import Careers from "../components/Careers/Careers";
import { prisma } from "../lib/prisma";

function SupportPage({
  careers,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NavBar />
      <Careers careers={careers} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  let result: CareerData[] = [];
  let careers = await prisma.career.findMany({
    include: {
      i18nCareer: {
        where: {
          language: {
            isoTwoLetter: locale,
          },
        },
      },
    },
  });

  careers.forEach((career) => {
    const i18nCareer = career.i18nCareer.find((i) => i.careerId === career.id);

    if (i18nCareer) {
      result.push({
        id: career.id,
        minYearExp: career.minYearExp,
        languageId: i18nCareer.languageId,
        title: i18nCareer.title,
        description: i18nCareer.description,
        requiredSkills: i18nCareer.requiredSkills,
        preferredSkills: i18nCareer.preferredSkills,
      });
    }
  });

  return {
    props: {
      ...(await serverSideTranslations(locale ? locale : "en", [
        "navbar",
        "careers",
      ])),
      careers: careers,
    },
    revalidate: 60,
    notFound: true,
  };
};

export default SupportPage;
