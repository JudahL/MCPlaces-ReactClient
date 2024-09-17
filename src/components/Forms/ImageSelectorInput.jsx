function ImageSelectorInput({ label }) {
  return (
    <>
      <label
        htmlFor={label}
        className="block mt-6 text-gray-700 font-bold text-2xl"
      >
        {label}
      </label>
      <input
        className="mt-4 w-full rounded-lg border border-gray-300 bg-white text-gray-600 cursor-pointer file:border-none file:bg-emerald-700 file:text-gray-50 file:rounded-l-lg file:p-2 file:hover:bg-emerald-600"
        type="file"
        name={label}
        id={label}
        accept="image/*"
      />
    </>
  );
}

export { ImageSelectorInput };
