import { FunctionComponent } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";

import { useTranslation } from "react-i18next";

const Footer: FunctionComponent = () => {
  const { t } = useTranslation("footer");
  return (
    <footer className="p-8 max-w-6xl mx-auto">
      <div>{t("line1")}</div>
      <div className="flex">
        <HiOutlineMail className="my-auto mr-1" />
        {t("line2")}
      </div>
      <div className="flex">
        <BsTelephone className="my-auto mr-1" />
        +66 95-294-5693, +66 02-271-4362-3, 066-115-2264-5
      </div>
      <address className="not-italic flex">
        <FaRegAddressCard className="my-auto mr-1" />
        {t("line4")}
      </address>
    </footer>
  );
};

export default Footer;
