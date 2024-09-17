function FormInput({ label, isRequired = false, type, oldValue }) {
  const inputType = (
    <input
      className="block w-full p-1 mt-2 border border-gray-300 text-xl text-emerald-800"
      type="text"
      id={label}
      name={label}
      defaultValue={oldValue}
      required={isRequired}
    />
  );

  const textAreaType = (
    <textarea
      className="block w-full p-1 mt-2 border border-gray-300 text-md text-emerald-800"
      type="text"
      id={label}
      name={label}
      defaultValue={oldValue}
      required={isRequired}
    />
  );

  function renderInput() {
    switch (type) {
      case 'input':
        return inputType;
      case 'textarea':
        return textAreaType;
      default:
        return inputType;
    }
  }

  return (
    <>
      <label
        htmlFor={label}
        className="block mt-6 text-gray-700 font-bold text-2xl"
      >
        {label}
      </label>
      {renderInput()}
    </>
  );
}

export { FormInput };
