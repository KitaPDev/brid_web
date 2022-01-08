import { useTranslation } from "next-i18next";
import { MdForum, MdOutlineBugReport } from "react-icons/md";
import { FaqData } from "../../interfaces/support";

interface SupportProps {
  faqs: FaqData[];
}

function Support({ faqs }: SupportProps) {
  const { t } = useTranslation("support");

  return (
    <div>
      <section className="hero">
        <div className="flex flex-col justify-center align-middle">
          <h1 className="text-white text-3xl xl:text-6xl font-semibold text-center">
            {t("heroTitle")}
          </h1>
        </div>
      </section>
      <section className="p-4 mb:p-8 mb-8 bg-gray-100">
        <div className="max-w-6xl flex flex-col justify-center md:flex-row md:justify-evenly mx-auto md:py-8">
          <div className="w-full md:w-1/2 bg-white rounded-xl p-8 md:mr-4 mb-4 md:mb-0">
            <div className="max-w-max bg-gray-400 mx-auto p-6 rounded-full">
              <MdForum size={75} fill="white" />
            </div>
            <h2
              className="text-center my-6 text-2xl font-500
            hover:underline hover:text-blue-700"
            >
              <a href="http://planetone.online/forum/index.php" target="_blank">
                {t("s11Title")}
              </a>
            </h2>
            <hr />
            <p className="text-center my-6">{t("s11Description")}</p>
          </div>
          <div className="w-full md:w-1/2 bg-white rounded-xl p-8 md:ml-4">
            <div className="max-w-max bg-gray-400 mx-auto p-6 rounded-full">
              <MdOutlineBugReport size={75} fill="white" />
            </div>
            <h2
              className="text-center my-6 text-2xl font-500
            hover:underline hover:text-blue-700"
            >
              <a
                href="http://planetone.online:9090/jtrac/app/login;jsessionid=z2ydg0knzjab"
                target="_blank"
              >
                {t("s12Title")}
              </a>
            </h2>
            <hr />
            <p className="text-center my-6">{t("s12Description")}</p>
          </div>
        </div>
      </section>
      <section className="p-8 max-w-6xl mx-auto mb-8">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            {t("s2Title")}
          </h2>
          <p className="text-gray-700 text-center pb-8">{t("s2Subtitle")}</p>
        </div>

        {faqs.map((faq, i) => {
          if (i === 0) {
            return (
              <div className="container-faq">
                <div className="row-ques">
                  <span className="sym-ques">Q.</span>
                  <h3 className="h3-ques">{faq.question}</h3>
                </div>
                <div className="row-ans">
                  <span className="sym-ans">A.</span>
                  <p className="p-ans">{faq.answer}</p>
                </div>
              </div>
            );
          } else {
            return (
              <>
                <hr className="hr-faq" />
                <div className="container-faq">
                  <div className="row-ques">
                    <span className="sym-ques">Q.</span>
                    <h3 className="h3-ques">{faq.question}</h3>
                  </div>
                  <div className="row-ans">
                    <span className="sym-ans">A.</span>
                    <p className="p-ans">{faq.answer}</p>
                  </div>
                </div>
              </>
            );
          }
        })}
      </section>
    </div>
  );
}

export default Support;
