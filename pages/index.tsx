import Home from "../components/Home/Home";
import NavBar from "../components/NavBar/NavBar";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ContentModuleData, ModuleData } from "../interfaces/module";
import { ContentIndustryData, IndustryData } from "../interfaces/industry";
import Footer from "../components/Footer/Footer";
import { prisma } from "../lib/prisma";

function HomePage({
  modules,
  industries,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NavBar />
      <Home modules={modules} industries={industries} />
      <hr />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  let modules: ModuleData[] = [];

  let pmModules = await prisma.module.findMany({
    include: {
      i18nModule: {
        where: {
          language: {
            isoTwoLetter: locale,
          },
        },
      },
    },
  });

  let pmContentModules = await prisma.contentModule.findMany({
    include: {
      i18nContentModule: {
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

  pmModules.forEach((module) => {
    const i18nModule = module.i18nModule.find((i) => i.moduleId === module.id);

    let label = module.label;
    if (i18nModule) label = i18nModule.label;

    let contentData: ContentModuleData[] = [];
    pmContentModules.forEach((cm) => {
      if (cm.moduleId === module.id) {
        let content: ContentModuleData = {
          id: cm.id,
          moduleId: module.id,
          displayOrder: cm.displayOrder,
          mediaPath: cm.mediaPath || "",
          content:
            cm.i18nContentModule.find((icm) => icm.contentModuleId === cm.id)
              ?.content || "",
        };

        contentData.push(content);
      }
    });

    modules.push({
      id: module.id,
      languageId: i18nModule?.languageId,
      label: label,
      description: i18nModule?.description || "",
      contentData: contentData,
    });
  });

  let industries: IndustryData[] = [];

  let pmIndustries = await prisma.industry.findMany({
    include: {
      i18nIndustry: {
        where: {
          language: {
            isoTwoLetter: locale,
          },
        },
      },
    },
  });

  let pmContentIndustries = await prisma.contentIndustry.findMany({
    include: {
      i18nContentIndustry: {
        where: {
          language: {
            isoTwoLetter: locale,
          },
        },
      },
    },
  });

  pmIndustries.forEach((industry) => {
    const i18nIndustry = industry.i18nIndustry.find(
      (i) => i.industryId === industry.id
    );

    let label = industry.label;
    if (i18nIndustry) label = i18nIndustry.label;

    let contentData: ContentIndustryData[] = [];
    pmContentIndustries.forEach((ci) => {
      if (ci.industryId === industry.id) {
        let content: ContentIndustryData = {
          id: ci.id,
          industryId: industry.id,
          displayOrder: ci.displayOrder,
          mediaPath: ci.mediaPath || "",
          content:
            ci.i18nContentIndustry.find(
              (ici) => ici.contentIndustryId === ci.id
            )?.content || "",
        };

        contentData.push(content);
      }
    });

    industries.push({
      id: industry.id,
      languageId: i18nIndustry?.languageId,
      label: label,
      contentData: contentData,
    });
  });

  return {
    props: {
      ...(await serverSideTranslations(locale ? locale : "en", [
        "navbar",
        "home",
        "footer",
      ])),
      modules,
      industries: industries,
    },
    revalidate: 60,
  };
};

export default HomePage;
