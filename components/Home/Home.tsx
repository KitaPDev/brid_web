import Link from "next/link";
import { useTranslation } from "next-i18next";
import { ModuleData } from "../../interfaces/module";
import { IndustryData } from "../../interfaces/industry";
import { BsArrowRight } from "react-icons/bs";
import { RiCustomerService2Line, RiSettings3Line } from "react-icons/ri";

interface HomeProps {
  modules: ModuleData[];
  industries: IndustryData[];
}

function Home({ modules, industries }: HomeProps) {
  const { t } = useTranslation("home");

  return (
    <div>
      <section className="hero-home">
        <div className="backdrop-blur-md flex flex-col justify-center pl-8 space-y-4">
          <h1 className="text-white text-6xl font-semibold">
            {t("heroTitle")}
          </h1>
          <p className="text-white text-3xl">{t("heroSubtitle")}</p>

          <Link href="/contact-us">
            <button
              className="bg-blue-500 text-white p-3 rounded-lg w-max
          hover:bg-white hover:text-blue-500 transition-all"
            >
              {t("heroBtnText")}
            </button>
          </Link>
        </div>
      </section>
      <section className="p-8 max-w-6xl mx-auto mb-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">{t("s1Title")}</h2>
          <p className="text-gray-700">{t("s1Subtitle")}</p>
        </div>
        <div className="my-8 grid grid-cols-3 gap-8">
          {modules.map((m) => (
            <div className="relative p-4 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-xl">{m.label}</h3>
              <p className="text-gray-500 mt-4 pb-4">{m.description}</p>
              <div className="mt-4">
                <Link href={"/module/" + m.id}>
                  <button
                    className="flex absolute bottom-4 text-blue-500 font-light
                  hover:text-blue-800 hover:underline"
                  >
                    {t("Learn More")}{" "}
                    <BsArrowRight className="my-auto ml-2" size={14} />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="p-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-2 mb-4">
            <h2 className="text-3xl font-bold text-center">{t("s2Title")}</h2>
            <p className="text-gray-700 text-center">{t("s2Subtitle")}</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {industries.map((i) => (
              <div className="py-4 px-6 bg-white rounded-xl m-4">
                <h3 className="text-l">{i.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="p-8 max-w-6xl mx-auto mb-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">{t("s3Title")}</h2>
          <p className="text-gray-700">{t("s3Subtitle")}</p>
        </div>
        <div className="my-8 grid grid-cols-3 gap-8">
          <div className="space-y-2">
            <div className="h-40">
              <RiCustomerService2Line className="w-6/12 h-full mx-auto" />
            </div>
            <h3 className="text-center text-xl font-bold">{t("s3Topic1")}</h3>
            <p className="text-justify">{t("s3Desc1")}</p>
          </div>
          <div className="space-y-2">
            <div className="h-40">
              <RiSettings3Line className="w-6/12 h-full mx-auto" />
            </div>
            <h3 className="text-center text-xl font-bold">{t("s3Topic2")}</h3>
            <p className="text-justify">{t("s3Desc2")}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
