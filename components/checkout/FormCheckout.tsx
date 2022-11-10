import { ErrorMessage, Field, Form, Formik } from 'formik';

interface MyFormikValues {
  address: string;
  city: string;
  region: string;
  country: string;
  zipCode: string;
  phoneNumber: string;
}

export const FormCheckout = () => {
  const initialValues: MyFormikValues = {
    address: '',
    city: '',
    region: '',
    country: '',
    zipCode: '',
    phoneNumber: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
    >
      <Form className=" flex flex-col mt-8 space-y-6 md:w-[85%] ">
        <div className="w-full flex flex-col">
          <label htmlFor="address" className="text-gray-500 font-light">
            Address
          </label>
          <Field
            name="address"
            id="address"
            className="py-2.5 rounded-lg bg-gray-900 pl-2 text-gray-300"
          />
        </div>

        <div className="w-full flex flex-col">
          <label htmlFor="city" className="text-gray-500 font-light">
            City
          </label>
          <Field
            name="city"
            id="city"
            className="py-2.5 rounded-lg bg-gray-900 pl-2 text-gray-300"
          />
        </div>

        <div className="w-full flex flex-col">
          <label htmlFor="region" className="text-gray-500 font-light">
            Region
          </label>
          <Field
            name="region"
            id="region"
            className="py-2.5 rounded-lg bg-gray-900 pl-2 text-gray-300"
          />
        </div>

        <div className="w-full flex flex-col">
          <label htmlFor="country" className="text-gray-500 font-light">
            Country
          </label>
          <Field
            name="country"
            id="country"
            className="py-2.5 rounded-lg bg-gray-900 pl-2 text-gray-300"
          />
        </div>

        <div className="w-full flex flex-col">
          <label htmlFor="zipCode" className="text-gray-500 font-light">
            Zip code
          </label>
          <Field
            name="zipCode"
            id="zipCode"
            className="py-2.5 rounded-lg bg-gray-900 pl-2 text-gray-300"
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="phoneNumber" className="text-gray-500 font-light">
            Phone
          </label>
          <Field
            name="phoneNumber"
            id="phoneNumber"
            className="py-2.5 rounded-lg bg-gray-900 pl-2 text-gray-300"
          />
        </div>
      </Form>
    </Formik>
  );
};
