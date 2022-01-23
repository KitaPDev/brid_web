import NavBar from "../components/NavBar/NavBar";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Support from "../components/Support/Support";
import http from "../lib/http";
import { FaqData } from "../interfaces/support";
import Footer from "../components/Footer/Footer";

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
  let resp = await http.get(`/${locale}/support`);
  let faqs: FaqData[] = resp.data;

  return {
    props: {
      ...(await serverSideTranslations(locale ? locale : "en", [
        "navbar",
        "support",
        "footer",
      ])),
      faqs,
      revalidate: 60,
    },
  };
};

export default SupportPage;
