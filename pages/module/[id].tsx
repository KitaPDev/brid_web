import NavBar from "../../components/NavBar/NavBar";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import http from "../../lib/http";
import { ModuleData } from "../../interfaces/module";
import Module from "../../components/Module/Module";
import Footer from "../../components/Footer/Footer";

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
  let resp = await http.get(`/${locale}/module`);
  let modules: ModuleData[] = resp.data;

  return {
    props: {
      ...(await serverSideTranslations(locale ? locale : "en", [
        "navbar",
        "module",
        "footer",
      ])),
      modules: modules,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  let resp = await http.get(`/module/id`);
  let moduleIds = resp.data;

  const paths = moduleIds.map((mi: number) => ({
    params: { id: mi.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export default ModulePage;
