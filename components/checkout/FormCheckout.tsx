import { Field, Form, Formik, ErrorMessage } from 'formik';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { checkoutYup } from '../../helpers';
import { useCartStore } from '../../hooks';
import { RootState } from '../../store';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
import { Spinner } from '../ui';
interface MyFormikValues {
  address: string;
  city: string;
  country: string;
  zipCode: string;
  phoneNumber: string;
}

export const FormCheckout = () => {
  const router = useRouter();
  const orderId = uuidv4();
  const [isPaying, setIsPaying] = useState(false);
  const { products, total, cartCounter } = useSelector(
    (state: RootState) => state.cart
  );
  const { startNewOrder } = useCartStore();

  const initialValues: MyFormikValues = {
    address: '',
    city: '',
    country: '',
    zipCode: '',
    phoneNumber: '',
  };
  return (
    <Formik
      validationSchema={checkoutYup}
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        setIsPaying(true);
        await startNewOrder({ products, total, cartCounter, id: orderId });
        setIsPaying(false);
        actions.resetForm();
        router.push('/');
      }}
    >
      <Form className=" flex flex-col mt-8 space-y-4 md:w-[85%] ">
        <div className="w-full flex flex-col">
          <label htmlFor="address" className="text-gray-500 font-light">
            Address
          </label>
          <Field
            name="address"
            id="address"
            className="py-2.5 rounded-lg bg-gray-900 pl-2 text-gray-300"
          />
          <ErrorMessage
            name="address"
            component="span"
            className="text-red-900 mt-1"
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
          <ErrorMessage
            name="city"
            component="span"
            className="text-red-900 mt-1"
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
          <ErrorMessage
            name="country"
            component="span"
            className="text-red-900 mt-1"
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
          <ErrorMessage
            name="zipCode"
            component="span"
            className="text-red-900 mt-1"
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
          <ErrorMessage
            name="phoneNumber"
            component="span"
            className="text-red-900 mt-1"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white font-medium py-2 text-center  rounded-md hover:bg-indigo-600
            disabled:bg-indigo-800 disabled:text-gray-500
            "
            disabled={isPaying}
          >
            {isPaying ? <Spinner /> : <p>Proceed to Payment</p>}
          </button>
        </div>
      </Form>
    </Formik>
  );
};
