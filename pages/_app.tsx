import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";

import { appWithTranslation } from "next-i18next";
import { GetStaticPropsContext } from "next";

const MODULES = [
  "Accounting",
  "General Ledger",
  "HR",
  "CRM",
  "Inventory",
  "POS",
  "Sales",
  "Work Order",
  "Production Planning",
];

const INDUSTRIES = [
  "Agriculture",
  "Automotive",
  "Education",
  "Healthcare",
  "Manufacturing",
  "Retail",
  "Services",
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <NavBar modules={MODULES} industries={INDUSTRIES} />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);

export const getStaticProps = async (context: GetStaticPropsContext) => {};
