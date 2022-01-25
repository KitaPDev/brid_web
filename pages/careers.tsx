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
  let careers: CareerData[] = [];
  let pmCareers = await prisma.career.findMany({
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

  pmCareers.forEach((career) => {
    const pmI18nCareer = career.i18nCareer.find(
      (i) => i.careerId === career.id
    );

    if (pmI18nCareer) {
      careers.push({
        id: career.id,
        minYearExp: career.minYearExp,
        languageId: pmI18nCareer.languageId,
        title: pmI18nCareer.title,
        description: pmI18nCareer.description,
        requiredSkills: pmI18nCareer.requiredSkills,
        preferredSkills: pmI18nCareer.preferredSkills,
      });
    }
  });

  return {
    props: {
      ...(await serverSideTranslations(locale ? locale : "en", [
        "navbar",
        "careers",
      ])),
      careers,
    },
    revalidate: 60,
  };
};

export default SupportPage;
