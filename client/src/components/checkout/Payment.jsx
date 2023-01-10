import CheckoutInput from './CheckoutInput';

const Payment = ({ values, handleBlur, handleChange }) => {
  return (
    <div>
      <h1 className="text-xl">Payment Information</h1>
      <div className="flex flex-col md:grid grid-cols-4 gap-5 mt-5">
        <CheckoutInput
          id="email"
          type="email"
          placeholder="Email"
          className="col-span-4"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <CheckoutInput
          id="phone"
          type="tel"
          placeholder="Phone"
          className="col-span-4"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
};

export default Payment;
