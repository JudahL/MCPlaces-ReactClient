function CoordinatesInput({ label, oldValue }) {
  return (
    <>
      <label htmlFor={label} className="pt-2 text-gray-700 font-bold text-xl">
        {label + ':'}
      </label>
      <input
        className="w-full p-1 mt-4 border border-gray-300 text-xl text-emerald-800"
        type="text"
        id={label}
        name={label}
        defaultValue={oldValue}
      />
    </>
  );
}

export { CoordinatesInput };
