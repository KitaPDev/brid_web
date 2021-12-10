import Home from "../components/Home/Home";
import NavBar from "../components/NavBar/NavBar";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import http from "../lib/http";
import { ModuleData } from "../interfaces/module";
import { IndustryData } from "../interfaces/industry";
import Footer from "../components/Footer/Footer";

function HomePage({
  modules,
  industries,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NavBar />
      <Home modules={modules} industries={industries} />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  let resp = await http.get(`/${locale}/module`);
  let modules: ModuleData[] = resp.data;

  resp = await http.get(`/${locale}/industry`);
  let industries: IndustryData[] = resp.data;

  return {
    props: {
      ...(await serverSideTranslations(locale ? locale : "en", [
        "navbar",
        "home",
        "footer",
      ])),
      modules,
      industries,
    },
  };
};

export default HomePage;
