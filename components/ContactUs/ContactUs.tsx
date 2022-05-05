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
  );
};

export default ContactUs;
