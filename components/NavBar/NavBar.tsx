import React, { useEffect, useState } from "react";
import router, { useRouter } from "next/router";
import Link from "next/link";
import { GoChevronDown } from "react-icons/go";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { ModuleData } from "../../interfaces/module";
import { LanguageData } from "../../interfaces/language";
import http from "../../lib/http";

import { useTranslation } from "next-i18next";

function NavBar() {
  const { locale, pathname, query, asPath } = useRouter();
  const { t } = useTranslation("navbar");

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModulesOpen, setIsModulesOpen] = useState(false);
  const [isLanguagesOpen, setIsLanguagesOpen] = useState(false);
  const [modules, setModules] = useState<ModuleData[]>([]);
  const [languages, setLanguages] = useState<LanguageData[]>([]);

  useEffect(() => {
    const getNavBarData = async () => {
      let resp = await http.get(`/${locale}/module`);
      setModules(resp.data);

      resp = await http.get(`/language`);
      setLanguages(resp.data);
    };

    getNavBarData();
  }, [locale]);

  return (
    <nav className="sticky flex items-center flex-wrap p-4 z-50">
      <ul className="block sm:flex items-center flex-shrink-0 w-full">
        <div className="flex">
          <li className="mr-6 text-blue-800 text-5xl uppercase font-semibold">
            <Link href="/">BRID</Link>
          </li>
          <div className="sm:hidden flex items-center w-full justify-end">
            <button
              className="flex h-6 w-6 fill-current justify-center items-center"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              {isNavOpen ? <GrClose size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        <ul
          className={`block sm:flex items-center flex-shrink-0 mx-auto flex-wrap
                        ${isNavOpen ? "visible" : "hidden"}`}
        >
          <li>
            <div
              className="group relative p-1 sm:p-2 pl-0 sm:pr-1 ml-auto w-min"
              onMouseOver={() => setIsModulesOpen(true)}
              onMouseLeave={() => setIsModulesOpen(false)}
            >
              <button
                className={`btn-nav-dropdown ${
                  pathname.includes("/module")
                    ? "font-bold flex justify-center items-center p-2 pl-3 pr-3 rounded-lg transition-all bg-blue-800 text-white shadow-lg w-max hover:text-blue-800 hover:bg-white hover:ring-blue-800 hover:ring-1"
                    : ""
                }`}
              >
                {t("modules")}{" "}
                <GoChevronDown className="ml-1 transition-all group-hover:rotate-180" />
              </button>

              {isModulesOpen ? (
                <div
                  className="nav-dropdown-menu"
                  tabIndex={-1}
                  onMouseOver={() => setIsModulesOpen(true)}
                >
                  {modules.map((m) => (
                    <Link key={m.label} href={"/module/" + m.id} passHref>
                      <div className="nav-dropdown-item" tabIndex={-1}>
                        {m.label}
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </div>
          </li>
          <li
            className="p-1 ml-auto w-min
            sm:p-2 sm:pr-1"
          >
            <Link href="/news" passHref>
              <button
                className={`btn-nav ${
                  pathname === "/news"
                    ? "font-bold flex justify-center items-center p-2 pl-3 pr-3 rounded-lg transition-all bg-blue-800 text-white shadow-lg w-max hover:text-blue-800 hover:bg-white hover:ring-blue-800 hover:ring-1"
                    : ""
                }`}
              >
                {t("news")}
              </button>
            </Link>
          </li>
          <li className="p-1 sm:p-2 sm:pr-1 ml-auto w-min">
            <Link href="/support" passHref>
              <button
                className={`btn-nav ${
                  pathname === "/support"
                    ? "font-bold flex justify-center items-center p-2 pl-3 pr-3 rounded-lg transition-all bg-blue-800 text-white shadow-lg w-max hover:text-blue-800 hover:bg-white hover:ring-blue-800 hover:ring-1"
                    : ""
                }`}
              >
                {t("support")}
              </button>
            </Link>
          </li>
          <li className="p-1 sm:p-2 sm:pr-1 ml-auto w-min">
            <Link href="/careers" passHref>
              <button
                className={`btn-nav ${
                  pathname === "/careers"
                    ? "font-bold flex justify-center items-center p-2 pl-3 pr-3 rounded-lg transition-all bg-blue-800 text-white shadow-lg w-max hover:text-blue-800 hover:bg-white hover:ring-blue-800 hover:ring-1"
                    : ""
                }`}
              >
                {t("careers")}
              </button>
            </Link>
          </li>
          <li className="p-2 pl-4 sm:pr-0 ml-auto w-min">
            <Link href="/contact-us" passHref>
              <button
                className={`btn-nav ${
                  pathname === "/contact-us"
                    ? "font-bold flex justify-center items-center p-2 pl-3 pr-3 rounded-lg transition-all bg-blue-800 text-white shadow-lg w-max hover:text-blue-800 hover:bg-white hover:ring-blue-800 hover:ring-1"
                    : ""
                }`}
              >
                {t("contactUs")}
              </button>
            </Link>
          </li>
          <li>
            <div
              className="group relative p-1 sm:p-2 pl-0 sm:pr-1 ml-auto w-min"
              onMouseOver={() => setIsLanguagesOpen(true)}
              onMouseLeave={() => setIsLanguagesOpen(false)}
            >
              <button className="btn-nav-dropdown text-md">
                {t("languages")}{" "}
                <GoChevronDown className="ml-1 transition-all group-hover:rotate-180" />
              </button>

              {isLanguagesOpen ? (
                <div
                  className="nav-dropdown-menu"
                  tabIndex={-1}
                  onMouseOver={() => setIsLanguagesOpen(true)}
                >
                  {languages.map((l) => (
                    <div
                      key={l.isoTwoLetter}
                      className="nav-dropdown-item"
                      tabIndex={-1}
                    >
                      <div
                        onClick={() =>
                          router.push({ pathname, query }, asPath, {
                            locale: l.isoTwoLetter,
                          })
                        }
                      >
                        {l.nativeName}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </div>
          </li>
        </ul>
        <div className="flex">
          <li className="mr-6 text-blue-800 text-5xl uppercase font-semibold">
            <Link href="/">
              <img src="/brid_systems.jpg">
              </img>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
