const darkColour = ' border-b-gray-600 border-l-gray-600';
const lightColour = ' border-b-white border-l-white';
const darkTextColour = ' text-gray-600';
const lightTextColour = ' text-white';
const sizing = {
  normal: ' size-6',
  large: ' size-10',
};

function LoadingSymbol({ size = 'normal', dark = false, text = 'None' }) {
  let spinnerStyling =
    'animate-spin border-4 size-6 rounded-full border-t-transparent border-r-transparent';
  let textStyling = 'text-xl';

  spinnerStyling += sizing[size];

  if (dark) {
    spinnerStyling += darkColour;
    textStyling += darkTextColour;
  } else {
    spinnerStyling += lightColour;
    textStyling += lightTextColour;
  }

  return (
    <div className="flex justify-center items-center gap-4">
      <div className={spinnerStyling} />
      {text !== 'None' && <p className={textStyling}>{text}</p>}
    </div>
  );
}

export { LoadingSymbol };
