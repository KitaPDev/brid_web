import NavBar from "../components/NavBar/NavBar";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import http from "../lib/http";
import { CareerData } from "../interfaces/careers";
import Careers from "../components/Careers/Careers";

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
  let resp = await http.get(`/${locale}/careers`);
  let careers: CareerData[] = resp.data;

  return {
    props: {
      ...(await serverSideTranslations(locale ? locale : "en", [
        "navbar",
        "careers",
      ])),
      careers: careers,
    },
  };
};

export default SupportPage;
