import FormInput from './FormInput';

const FormLabel = ({ label, inputType, inputName, value, onChange }) => {
  return (
    <label htmlFor="" className="relative w-full">
      <FormInput
        inputType={inputType}
        inputName={inputName}
        value={value}
        onChange={onChange}
      />
      <span className="absolute left-0 transition-all duration-700 pointer-events-none text-lg bg-white dark:text-white dark:bg-black w-full ">
        {label}
      </span>
    </label>
  );
};

export default FormLabel;
