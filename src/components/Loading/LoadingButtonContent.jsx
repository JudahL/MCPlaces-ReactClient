import { LoadingSpinner } from './LoadingSpinner';

const darkTextColour = ' text-gray-600';
const lightTextColour = ' text-white';

function LoadingButtonContent({ dark = false, text = 'Loading...' }) {
  let textStyling = 'text-xl';
  textStyling += dark ? darkTextColour : lightTextColour;

  return (
    <div className="flex justify-center items-center gap-4">
      <LoadingSpinner dark={dark} />
      <p className={textStyling}>{text}</p>
    </div>
  );
}

export { LoadingButtonContent };
