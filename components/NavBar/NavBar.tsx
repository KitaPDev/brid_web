import { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { GoChevronDown } from "react-icons/go";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { IModule } from "../../interfaces/module";
import { IIndustry } from "../../interfaces/industry";

interface NavBarProps {
  modules: IModule[];
  industries: IIndustry[];
}

const NavBar: FunctionComponent<NavBarProps> = ({ modules, industries }) => {
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModulesOpen, setIsModulesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

  return (
    <nav className="sticky flex items-center flex-wrap p-6">
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
          className={`block sm:flex items-center flex-shrink-0 mx-auto
                        ${isNavOpen ? "visible" : "hidden"}`}
        >
          <li>
            <div
              className="group relative p-1 sm:p-2 pl-0 sm:pr-1 ml-auto w-min"
              onMouseOver={() => setIsModulesOpen(true)}
              onMouseLeave={() => setIsModulesOpen(false)}
            >
              <button
                className="flex justify-center items-center p-2 rounded-lg transition-all
              group-hover:text-white group-hover:bg-blue-800 group-hover:shadow-lg"
              >
                Modules{" "}
                <GoChevronDown className="ml-1 transition-all group-hover:rotate-180" />
              </button>

              {isModulesOpen ? (
                <div
                  className="absolute origin-top-right mt-2 min-w-max rounded-lg shadow-lg bg-white ring-1 ring-gray-100
                focus:outline-none z-10"
                  tabIndex={-1}
                  onMouseOver={() => setIsModulesOpen(true)}
                >
                  {modules.map((m) => (
                    <li
                      className="text-gray-700 block px-4 py-2 text-sm rounded-lg 
                    hover:bg-blue-800 hover:text-white hover:cursor-pointer"
                      tabIndex={-1}
                    >
                      <Link href={"/module/" + m.id}>{m.label}</Link>
                    </li>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </div>
          </li>
          <li>
            <div
              className="group relative p-1 sm:p-2 pl-0 sm:pr-1 ml-auto w-min"
              onMouseOver={() => setIsIndustriesOpen(true)}
              onMouseLeave={() => setIsIndustriesOpen(false)}
            >
              <button
                className="flex justify-center items-center p-2 rounded-lg transition-all
            group-hover:text-white group-hover:bg-blue-800 group-hover:shadow-lg"
              >
                Industries{" "}
                <GoChevronDown className="ml-1 transition-all group-hover:rotate-180" />
              </button>

              {isIndustriesOpen ? (
                <div
                  className="absolute origin-top-right mt-2 min-w-max rounded-lg shadow-lg bg-white ring-1 ring-gray-100
                  focus:outline-none z-10"
                  tabIndex={-1}
                  onMouseOver={() => setIsIndustriesOpen(true)}
                >
                  {industries.map((i) => (
                    <li
                      className="text-gray-700 block px-4 py-2 text-sm rounded-lg 
                    hover:bg-blue-800 hover:text-white hover:cursor-pointer"
                      tabIndex={-1}
                    >
                      <Link href={"/industry/" + i.id}>{i.label}</Link>
                    </li>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </div>
          </li>
          <li className="p-1 sm:p-2 sm:pr-1 ml-auto w-min">
            <button
              className="flex justify-center items-center p-2 rounded-lg transition-all
            hover:text-white hover:bg-blue-800 hover:shadow-lg"
            >
              <Link href="/news">News</Link>
            </button>
          </li>
          <li className="p-1 sm:p-2 sm:pr-1 ml-auto w-min">
            <button
              className="flex justify-center items-center p-2 rounded-lg transition-all
            hover:text-white hover:bg-blue-800 hover:shadow-lg"
            >
              <Link href="/support">Support</Link>
            </button>
          </li>
          <li className="p-1 sm:p-2 sm:pr-1 ml-auto w-min">
            <button
              className="flex justify-center items-center p-2 rounded-lg transition-all
            hover:text-white hover:bg-blue-800 hover:shadow-lg"
            >
              <Link href="/careers">Careers</Link>
            </button>
          </li>
          <li className="p-2 pl-4 sm:pr-0 ml-auto w-min">
            <button
              className="flex justify-center items-center p-2 rounded-lg transition-all bg-blue-800 text-white shadow-lg w-max
            hover:text-blue-800 hover:bg-white hover:ring-blue-800 hover:ring-1"
            >
              <Link href="/contact-us">Contact Us</Link>
            </button>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default NavBar;
