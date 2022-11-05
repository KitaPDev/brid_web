import { FunctionComponent } from "react";
import { ContactData } from "../../interfaces/contact";
import http from "../../lib/http";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { regex } from "../../lib/regex";

import { useTranslation } from "next-i18next";

const ContactUs: FunctionComponent = () => {
  const { t } = useTranslation("contact-us");

  return (
    <div className="grid grid-cols-2 grid-gap-4">
      <main className="max-w-2xl border-2 p-4 rounded-lg w-full m-4">
        <div className="p-4">
          <h1 className="font-semibold text-4xl">{t("title")}</h1>
          <p className="mt-2 text-gray-500">{t("subtitle")}</p>
        </div>
        <hr className="mt-4 mb-4" />

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            organizationName: "",
            email: "",
            phoneNumber: "",
            message: "",
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(30, "Must be 30 characters or less")
              .required("Required"),
            lastName: Yup.string()
              .max(30, "Must be 30 characters or less")
              .required("Required"),
            organizationName: Yup.string().required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            phoneNumber: Yup.string()
              .matches(regex.phoneNumber, "Invalid phone number")
              .required("Required"),
            message: Yup.string(),
          })}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);

            const data: ContactData = values;
            const resp = await http.post(`/contact`, data);
            if (resp.status === 201) {
              resetForm();
              alert(
                "Thank you. Your information has been submitted successfully."
              );
            }

            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="w-full p-2 mb-2">
                <div>
                  <label className="flex" htmlFor="firstName">
                    {t("firstName")}
                    <p className="text-red-700 ml-1">*</p>
                  </label>
                </div>
                <Field
                  name="firstName"
                  type="text"
                  className="w-full border-2 rounded-md p-0.5 pl-2"
                />
                <p className="text-red-500">
                  <ErrorMessage name="firstName" />
                </p>
              </div>

              <div className="w-full p-2 mb-2">
                <div>
                  <label className="flex" htmlFor="lastName">
                    {t("lastName")}
                    <p className="text-red-700 ml-1">*</p>
                  </label>
                </div>
                <Field
                  name="lastName"
                  type="text"
                  className="w-full border-2 rounded-md p-0.5 pl-2"
                />
                <p className="text-red-500">
                  <ErrorMessage name="lastName" />
                </p>{" "}
              </div>

              <div className="w-full p-2 mb-2">
                <div>
                  <label className="flex" htmlFor="organizationName">
                    {t("organizationName")}
                    <p className="text-red-700 ml-1">*</p>
                  </label>
                </div>
                <Field
                  name="organizationName"
                  type="text"
                  className="w-full border-2 rounded-md p-0.5 pl-2"
                />
                <p className="text-red-500">
                  <ErrorMessage name="organizationName" />
                </p>
              </div>

              <div className="w-full p-2 mb-2">
                <div>
                  <label className="flex" htmlFor="email">
                    {t("email")}
                    <p className="text-red-700 ml-1">*</p>
                  </label>
                </div>
                <Field
                  name="email"
                  type="email"
                  className="w-full border-2 rounded-md p-0.5 pl-2"
                />
                <p className="text-red-500">
                  <ErrorMessage name="email" />
                </p>
              </div>

              <div className="w-full p-2 mb-2">
                <div>
                  <label className="flex" htmlFor="phoneNumber">
                    {t("phoneNumber")}
                    <p className="text-red-700 ml-1">*</p>
                  </label>
                </div>
                <Field
                  name="phoneNumber"
                  type="tel"
                  className="w-full border-2 rounded-md p-0.5 pl-2"
                />
                <p className="text-red-500">
                  <ErrorMessage name="phoneNumber" />
                </p>
              </div>

              <div className="w-full p-2 mb-2">
                <div>
                  <label className="flex" htmlFor="message">
                    {t("message")}
                  </label>
                </div>
                <Field
                  name="message"
                  as="textarea"
                  className="w-full border-2 rounded-md p-0.5 pl-2"
                  rows={4}
                />
              </div>
              <div className="w-full flex flex-row-reverse">
                <button
                  type="submit"
                  className="flex justify-center items-center p-2 
        rounded-lg transition-all bg-blue-800 text-white 
        shadow-lg w-max pl-4 pr-4 mr-2
        hover:text-blue-800 hover:bg-white hover:ring-blue-800 hover:ring-1"
                  disabled={isSubmitting}
                >
                  {t("submit")}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </main>
      <main className="max-w-2xl border-2 p-4 rounded-lg w-full m-4">
        <div className="grid grid-rows-2 grid-gap-3">
          <div className="p-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.772906882823!2d100.5559273147495!3d13.792558990321107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29c3b647a18a7%3A0x94706d2deeffc9f4!2sBRID%20Systems%20Co.%2C%20Ltd.!5e0!3m2!1sen!2sde!4v1667684351991!5m2!1sen!2sde" width="600" height="450" className="m-4 drop-shadow-xl" loading="lazy"></iframe>
            <h1 className="font-semibold text-4xl">{t("contact-info")}</h1>
            <hr className="mt-4 mb-4" />


            <div className="space-y-7">
              <div className="align-items-start flex w-100 flex-row">
                <div className="icon flex items-center justify-start">
                  <img src="contact_us_icons/phone-ringing-icon.png" className="w-1/5" />
                  <div className="p-3">
                    <span className="font-bold">Phone Number:</span>
                    <p>095-294-5693,02-271-4362-3, 066-115-2264-5</p>
                  </div>
                </div>
              </div>
              <div className="align-items-start flex w-100">
                <div className="icon flex items-center justify-start">
                  <img src="contact_us_icons/fax-icon.png" className="w-1/5" />
                  <div className="p-3">
                    <span className="font-bold">Fax:</span>
                    <p>02-271-4365</p>
                  </div>
                </div>
              </div>
              <div className="align-items-start flex w-100 flex-row">
                <div className="icon flex items-center justify-start">
                  <img src="contact_us_icons/mail-send-icon.png" className="w-1/5" />
                  <div className="p-3">
                    <span className="font-bold">Email:</span>
                    <a href="mailto: sales@bridsystems.com">
                      <p>sales@bridsystems.com</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="align-items-start flex w-100 flex-row">
                <a>
                  <div className="icon flex items-center justify-start">
                    <img src="contact_us_icons/line-icon.png" className="w-1/5" />
                    <div className="p-3">
                      <span className="font-bold">LINE:</span>
                      <p>@bridsystems</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="align-items-start flex w-100 flex-row">
                <a href="https://www.facebook.com/bridsystems">
                  <div className="icon flex items-center justify-start">
                    <img src="contact_us_icons/facebook-app-icon.png" className="w-1/5" />
                    <div className="p-3">
                      <span className="font-bold">Facebook:</span>
                      <p>https://www.facebook.com/bridsystems</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

  );
};

export default ContactUs;
