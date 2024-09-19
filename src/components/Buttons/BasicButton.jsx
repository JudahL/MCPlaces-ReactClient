const baseStyling = 'p-2 w-full rounded-lg text-xl';

//Ensure that all styles start with a space
const buttonColourStyles = {
  primary: ' bg-emerald-700 text-gray-50 hover:bg-emerald-600',
  secondary: ' ',
  subdued: ' bg-gray-500 text-gray-50 hover:bg-gray-400',
  warning: ' bg-red-500 text-gray-50 hover:bg-red-400',
};

const buttonMarginTop = {
  none: '',
  small: ' mt-2',
  medium: ' mt-4',
  large: ' mt-8',
};

function BasicButton({
  children,
  type = 'button',
  onClick,
  colour = 'primary',
  marginTop = 'none',
}) {
  return (
    <button
      className={
        baseStyling + buttonColourStyles[colour] + buttonMarginTop[marginTop]
      }
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export { BasicButton };
