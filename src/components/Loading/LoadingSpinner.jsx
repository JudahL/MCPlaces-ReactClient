const darkColour = ' border-b-gray-600 border-l-gray-600';
const lightColour = ' border-b-white border-l-white';

const sizing = {
  normal: ' size-6',
  large: ' size-10',
};

function LoadingSpinner({ size = 'normal', dark = false }) {
  let spinnerStyling =
    'animate-spin border-4 rounded-full border-t-transparent border-r-transparent';

  spinnerStyling += dark ? darkColour : lightColour;
  spinnerStyling += sizing[size];

  return <div className={spinnerStyling} />;
}

export { LoadingSpinner };
