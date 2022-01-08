import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { ModuleData } from "../../interfaces/module";

interface ModuleProps {
  modules: ModuleData[];
}

function Module({ modules }: ModuleProps) {
  const { t } = useTranslation("module");
  const { query } = useRouter();

  console.log(modules);

  let moduleData: ModuleData | undefined;
  if (query !== undefined) {
    moduleData = modules.find((m) => m.id.toString() === query.id);
  }

  let bgColor = "";

  return (
    <div>
      <section className="hero-module">
        <div className="flex flex-col justify-center align-middle space-y-2">
          <h1 className="text-white text-3xl xl:text-6xl font-semibold text-center">
            {moduleData?.label}
          </h1>
          <div className="xl:max-w-screen-lg mx-auto px-4">
            <p className="text-white text-base xl:text-xl text-justify md:text-center">
              {moduleData?.description}
            </p>
          </div>
        </div>
      </section>
      {moduleData?.contentData.map((content) => {
        const prevBgColor = bgColor;
        bgColor === "white" ? (bgColor = "gray-50") : (bgColor = "white");

        if (content.mediaPath?.includes(".pdf")) {
          let fileName = content.mediaPath.substring(
            content.mediaPath.lastIndexOf("/") + 1
          );
          return (
            <section
              className={`md:p-8 mx-auto p-4 ${
                prevBgColor === "white" ? "bg-gray-50" : "white max-w-6xl"
              }`}
            >
              <div className="flex flex-col justify-center items-center space-y-2">
                <h3 className="font-semibold text-lg text-center">
                  {content.content}
                </h3>
                <a
                  href={`/content_module/${content.mediaPath}`}
                  download={`${fileName}`}
                >
                  <button
                    className="bg-blue-600 text-white p-2 rounded-lg w-max
          hover:bg-white hover:text-blue-600 transition-all"
                  >
                    {fileName}
                  </button>
                </a>
              </div>
            </section>
          );
        }

        return (
          <section
            className={`md:p-8  mx-auto p-4 ${
              prevBgColor === "white" ? "bg-gray-50" : "white max-w-6xl"
            }`}
          >
            <div className="grid grid-cols-1 space-y-4 md:grid-cols-2 md:space-x-8">
              <img
                src={`/content_module/${content.mediaPath}`}
                className="aspect-w-16 aspce-h-9 max-h-96 rounded-lg shadow-lg ml-auto"
              ></img>
              <p className="text-xl text-justify flex items-center max-w-xl">
                {content.content}
              </p>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Module;