import { useTranslation } from "next-i18next";
import { CareerData } from "../../interfaces/careers";

interface CareersProps {
  careers: CareerData[];
}

function Support({ careers }: CareersProps) {
  const { t } = useTranslation("careers");

  return (
    <div>
      <section className="hero">
        <div className="flex flex-col justify-center align-middle">
          <h1 className="text-white text-3xl xl:text-6xl font-semibold text-center">
            {t("heroTitle")}
          </h1>
        </div>
      </section>
      <section className="p-4 mb:p-8 pt-8 mb:pt-16 mb-4 md:mb-8 bg-gray-100">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            {t("s1Title")}
          </h2>
          <p className="text-gray-700 text-center pb-8">{t("s1Subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 space-y-4 md:grid-cols-3 md:space-y-0">
          {careers.map((career) => (
            <div className="block-career" key={career.id}>
              <div className="p-4 pb-2 border-b-2 border-black">
                <h3 className="text-center text-2xl font-bold">
                  {career.title}
                </h3>
              </div>
              <div className="pt-2">
                <p>
                  <span>{t("minYearExp")}:</span> {career.minYearExp}{" "}
                  {career.minYearExp > 1 ? t("years") : t("year")}
                </p>
              </div>
              <div>
                <p>
                  <span>{t("description")}:</span> {career.description}
                </p>
              </div>
              <div>
                <p>
                  <span>{t("requiredSkills")}:</span> {career.requiredSkills}
                </p>
              </div>
              <div>
                <p>
                  <span>{t("preferredSkills")}:</span> {career.preferredSkills}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Support;
