import CheckoutInput from './CheckoutInput';

const CheckoutForm = ({
  purpose,
  formType,
  values,
  handleBlur,
  handleChange,
}) => {
  const {
    firstName,
    lastName,
    country,
    addressOne,
    addressTwo,
    city,
    province,
    postalCode,
  } = values;

  return (
    <div>
      <h1 className="text-xl">{purpose} Information</h1>
      <div className="flex flex-col md:grid grid-cols-4 gap-5 mt-5">
        <CheckoutInput
          formType={formType}
          name="firstName"
          type="text"
          value={firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="First Name"
          className="col-span-2"
        />
        <CheckoutInput
          formType={formType}
          name="lastName"
          type="text"
          value={lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Last Name"
          className="col-span-2"
        />
        <CheckoutInput
          formType={formType}
          name="country"
          type="text"
          value={country}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Country"
          className="col-span-4"
        />
        <CheckoutInput
          formType={formType}
          name="addressOne"
          type="text"
          value={addressOne}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Street Address"
          className="col-span-2"
        />
        <CheckoutInput
          formType={formType}
          name="addressTwo"
          type="text"
          value={addressTwo}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Street Address 2 (optional)"
          className="col-span-2"
        />
        <CheckoutInput
          formType={formType}
          name="city"
          type="text"
          value={city}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="City"
          className="col-span-2"
        />
        <CheckoutInput
          formType={formType}
          name="province"
          type="text"
          value={province}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Province"
        />
        <CheckoutInput
          formType={formType}
          name="postalCode"
          type="text"
          value={postalCode}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Postal Code"
        />
      </div>
    </div>
  );
};

export default CheckoutForm;
