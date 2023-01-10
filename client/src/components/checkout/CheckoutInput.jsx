const CheckoutInput = ({
  name,
  formType,
  type,
  value,
  onChange,
  onBlur,
  placeholder,
  className,
}) => {
  const formattedName = name => `${formType}.${name}`;
  return (
    <input
      name={formattedName(name)}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      className={`${className} py-3 px-3 border border-black dark:border-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full`}
    />
  );
};

export default CheckoutInput;
