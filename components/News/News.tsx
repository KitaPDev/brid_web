import { useTranslation } from "next-i18next";
import { NewsData } from "../../interfaces/news";
import Image from "next/image";

interface NewsProps {
  news: NewsData[];
}

function News({ news }: NewsProps) {
  const { t } = useTranslation("news");

  return (
    <div>
      <section className="hero">
        <div className="flex flex-col justify-center align-middle">
          <h1 className="text-white text-3xl xl:text-6xl font-semibold text-center">
            {t("heroTitle")}
          </h1>
        </div>
      </section>
      <section className="p-4 md:p-8 pt-8 md:pt-16 mb-4 md:mb-8 bg-gray-100">
        <div className="space-y-2">
          <div className="grid grid-cols-1 gap-4 space-y-4 md:grid-cols-2 md:space-y-0">
            <div className="block-news">
              <h3>{t("title1")}</h3>
              <a
                href="http://www.smartbomb.co.th/program/details/107642"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className=" max-h-full aspect-w-16 aspect-h-9 relative">
                  <Image
                    src="/content_news/radio905_02.png"
                    alt=""
                    layout="fill"
                  />
                </div>
              </a>
            </div>
            <div className="block-news">
              <h3>{t("title2")}</h3>
              <a
                href="http://www.smartbomb.co.th/program/details/107642"
                target="_blank"
                rel="noreferrer noopener"
              >
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/yGFFnZkiJKw"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </a>
              <p>{t("description2")}</p>
            </div>
          </div>
          <div className="block-news">
            <h3>{t("title3")}</h3>
            <div className="grid grid-cols-1 gap-4 space-y-4 md:grid-cols-4 md:space-y-0">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/1eaPInZzpgQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/HR8gFsSAEc0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/LY1vddINIEU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/9Ibv-F65mqo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p>{t("description3")}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default News;
