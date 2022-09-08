import NavBar from "../../components/NavBar/NavBar";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ContentModuleData, ModuleData } from "../../interfaces/module";
import Module from "../../components/Module/Module";
import Footer from "../../components/Footer/Footer";
import { prisma } from "../../lib/prisma";

function ModulePage({
  modules,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NavBar />
      <Module modules={modules} />
      <hr />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  let result: ModuleData[] = [];

  let modules = await prisma.module.findMany({
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

  let contentModules = await prisma.contentModule.findMany({
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

  modules.forEach((module) => {
    const i18nModule = module.i18nModule.find((i) => i.moduleId === module.id);

    let label = module.label;
    if (i18nModule) label = i18nModule.label;

    let contentData: ContentModuleData[] = [];
    contentModules.forEach((cm) => {
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

    result.push({
      id: module.id,
      languageId: i18nModule?.languageId,
      label: label,
      description: i18nModule?.description || "",
      contentData: contentData,
    });
  });

  return {
    props: {
      ...(await serverSideTranslations(locale ? locale : "en", [
        "navbar",
        "module",
        "footer",
      ])),
      modules: result,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  let rows = await prisma.module.findMany({
    select: {
      id: true,
    },
  });

  const paths = rows.map((r: { id: number }) => ({
    params: { id: r.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};

export default ModulePage;
