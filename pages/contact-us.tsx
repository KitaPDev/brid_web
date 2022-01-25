import ContactUs from "../components/ContactUs/ContactUs";
import NavBar from "../components/NavBar/NavBar";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function ContactUsPage() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center">
        <ContactUs />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ? locale : "en", [
      "navbar",
      "contact-us",
    ])),
  },
  revalidate: 60,
});

export default ContactUsPage;
