import Header from "@/components/Header";
import { memo, useContext } from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@mui/material";
import { MenuContext } from "@/hook/menuContext";

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  contact: yup.number().required(),
  address: yup.string(),
});

interface IRegisterUserProps {
  name: string;
  email: string;
  contact?: number;
  address?: string;
}

const initialValues = { name: "", email: "", contact: undefined, address: "" };

function FormField() {
  const { isDark } = useContext(MenuContext);
  const handleFormSubmit = (values: IRegisterUserProps) => {
    console.log(values);
  };
  return (
    <>
      <Header title="REGISTER USER" subtitle="Register a New User Profile" />
      <div className="overflow-y-auto">
        <center className="h-[calc(100vh-16.5rem)] pr-5">
          <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleFormSubmit}>
            {({ isSubmitting }) => (
              <Form
                className={`flex flex-col items-end [&_input]:w-full [&_input]:p-5 [&_input]:border-b [&_input]:rounded-t-lg [&_input:first-child]:mt-0 [&_input]:mt-8 [&_div]:text-xs [&_div]:mt-1 [&_div]:text-left [&_div]:text-red-600 ${
                  isDark
                    ? "[&_input]:bg-slate-700 [&_input]:border-gray-200 [&_input]:text-gray-200"
                    : "[&_input]:bg-slate-300 [&_input]:border-gray-800 [&_input]:text-gray-800"
                }`}
              >
                <Field type="text" name="name" placeholder="Enter your fullname" />
                <ErrorMessage name="name" component="div" />

                <Field type="email" name="email" placeholder="Enter email address" />
                <ErrorMessage name="email" component="div" />

                <Field type="text" name="contact" placeholder="Enter your contact number" />
                <ErrorMessage name="contact" component="div" />

                <Field type="text" name="address" placeholder="Enter your address" />
                <ErrorMessage name="address" component="div" />

                <Button
                  className=" mt-8 w-max bg-teal-700 hover:bg-teal-800"
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                >
                  Register new user
                </Button>
              </Form>
            )}
          </Formik>
        </center>
      </div>
    </>
  );
}

export default memo(FormField);
