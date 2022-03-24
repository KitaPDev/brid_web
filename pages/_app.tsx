import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="ROBOTS" content="ALL" />
        <meta name="revisit-after" content="1 days" />
        <meta
          httpEquiv="keywords"
          content="ระบบ ERP, ไทย ERP, ERP Thailand, ERP, ระบบบัญชี, Thai Accounting, BOM, ซอฟต์แวร์อีอาร์พี, Software ERP, การจัดตารางการผลิต, MRP, CRM,  สัมมนาอีอาร์พี, ซอฟต์แวร์ ซีอาร์เอ็ม ,ERP  Thailand, ERP Software, Inventory Management, Inventory Analysis, MRP, Optimization Software, PPO, Optimization Solutions, Logistics and Supply Chain, Inventory Planner, การบริหารคลังสินค้า, Logistic software"
        />
        <meta name="RATING" content="GENERAL" />
        <meta name="GENERATOR" content="BRID Systems Co., Ltd." />
        <meta name="DISTRIBUTION" content="GLOBAL" />
        <meta name="AUTHOR" content="BRID Systems" />
        <meta name="COPYRIGHT" content="Copyright (c) 2011 by BRID Systems" />
        <meta
          name="description"
          content="ระบบ ERP, ไทย ERP, ERP Thailand, ERP, ระบบบัญชี, Thai Accounting, BOM, ซอฟต์แวร์ ERP, พัฒนาระบบ ERP โดย คนไทย, CRM, SCM, PLM, Accounting, and other enterprise technologies, BRID Systems is providing solutions in manufacturing and logistics "
        />
        <meta
          name="keywords"
          content="ระบบ ERP, ไทย ERP, ERP Thailand, ERP, ระบบบัญชี, Thai Accounting, BOM, Interactive, Intelligence, bridsystems.com, Thailand Enterprise Developer team, CRM, ERP, WMS "
        />
        <meta name="msvalidate.01" content="B99F95398D69D2F92754614DD71A8489" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
