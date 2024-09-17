import { forwardRef } from 'react';

const CoordinatesInput = forwardRef(({ label }, ref) => {
  return (
    <>
      <label htmlFor={label} className="pt-2 text-gray-700 font-bold text-xl">
        {label + ':'}
      </label>
      <input
        className="w-full p-1 mt-4 border border-gray-300 text-xl text-emerald-800"
        type="text"
        ref={ref}
        id={label}
        name={label}
      />
    </>
  );
});

CoordinatesInput.displayName = 'CoordinatesInput';

export { CoordinatesInput };
