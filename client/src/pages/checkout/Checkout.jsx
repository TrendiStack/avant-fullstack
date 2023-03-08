import { Formik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import CheckoutForm from '../../components/checkout/CheckoutForm';
import Layout from '../../components/Layout';
import Payment from '../../components/checkout/Payment';

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;

  return (
    <Layout>
      <Formik
        initialValues={initialValues}
        validationSchema={checkOutScheme[activeStep]}
        // onSubmit={handleFormSubmit}
      >
        {({
          errors,
          touched,
          values,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              {isFirstStep && (
                <div className="flex flex-col gap-5">
                  {/* Billing Form */}
                  <CheckoutForm
                    purpose="Billing"
                    formType="billingAddress"
                    values={values.billingAddress}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                  />
                  {/* Checkbox */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="sameAddress"
                      id="sameAddress"
                      checked={values.shippingAddress.isSameAsBilling}
                      onChange={() =>
                        setFieldValue(
                          'shippingAddress.isSameAsBilling',
                          !values.shippingAddress.isSameAsBilling
                        )
                      }
                      className="h-4 w-4"
                    />
                    <label
                      htmlFor="sameAddress"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Shipping address is the same as my billing address
                    </label>
                  </div>
                  {/* Shipping Form */}
                  {!values.shippingAddress.isSameAsBilling && (
                    <CheckoutForm
                      purpose="Shipping"
                      formType="shippingAddress"
                      values={values.shippingAddress}
                      errors={errors}
                      touched={touched}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      setFieldValue={setFieldValue}
                    />
                  )}
                </div>
              )}
              {/* Payment information Form */}
              {isSecondStep && (
                <Payment
                  purpose="Payment"
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
              {/* Form Buttons */}
              <div>
                {isSecondStep && (
                  <button
                    onClick={() => setActiveStep(prev => prev - 1)}
                    className="w-full py-2 px-3 mt-10 border border-black dark:border-white rounded-md shadow-sm"
                  >
                    back
                  </button>
                )}
                <button
                  type="submit"
                  onClick={() => setActiveStep(prev => prev + 1)}
                  className={`w-full py-2 px-3 ${
                    isFirstStep ? 'my-10' : 'mt-5'
                  } border border-black dark:border-white rounded-md shadow-sm`}
                >
                  {isFirstStep ? 'Next' : 'Pay'}
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </Layout>
  );
};

// Initial values for the form
const initialValues = {
  billingAddress: {
    firstName: '',
    lastName: '',
    country: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    province: '',
    postalCode: '',
  },
  shippingAddress: {
    isSameAsBilling: true,
    firstName: '',
    lastName: '',
    country: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    province: '',
    postalCode: '',
  },
  email: '',
  phone: '',
};

// Validation schema for the form
const checkOutScheme = [
  yup.object().shape({
    billingAddress: yup.object().shape({
      firstName: yup.string().required('Required'),
      lastName: yup.string().required('Required'),
      country: yup.string().required('Required'),
      addressOne: yup.string().required('Required'),
      addressTwo: yup.string(),
      city: yup.string().required('Required'),
      province: yup.string().required('Required'),
      postalCode: yup.string().required('Required'),
    }),
    shippingAddress: yup.object().shape({
      isSameAsBilling: yup.boolean(),
      firstName: yup.string().when('isSameAsBilling', {
        is: false,
        then: yup.string().required('Required'),
      }),
      lastName: yup.string().when('isSameAsBilling', {
        is: false,
        then: yup.string().required('Required'),
      }),
      country: yup.string().when('isSameAsBilling', {
        is: false,
        then: yup.string().required('Required'),
      }),
      addressOne: yup.string().when('isSameAsBilling', {
        is: false,
        then: yup.string().required('Required'),
      }),
      addressTwo: yup.string(),
      city: yup.string().when('isSameAsBilling', {
        is: false,
        then: yup.string().required('Required'),
      }),
      province: yup.string().when('isSameAsBilling', {
        is: false,
        then: yup.string().required('Required'),
      }),
      postalCode: yup.string().when('isSameAsBilling', {
        is: false,
        then: yup.string().required('Required'),
      }),
    }),
  }),

  yup.object().shape({
    email: yup.string().email('Invalid email address').required('Required'),
    phone: yup.string().required('Required'),
  }),
];

export default Checkout;
