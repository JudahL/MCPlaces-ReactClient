import { Link } from 'react-router-dom';

function NavigationButton({ title, linkTo }) {
  return (
    <Link
      to={linkTo}
      className="w-24 rounded-lg text-lg text-center text-slate-800 font-bold hover:text-emerald-600"
    >
      {title}
    </Link>
  );
}

export { NavigationButton };
