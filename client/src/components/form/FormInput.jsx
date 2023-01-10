const FormInput = ({ inputType, inputName, value, onChange }) => {
  return (
    <input
      type={inputType}
      name={inputName}
      value={value}
      onChange={onChange}
      placeholder=" "
      className="bg-transparent outline-none border-b-2 pb-3 w-full"
    />
  );
};

export default FormInput;
