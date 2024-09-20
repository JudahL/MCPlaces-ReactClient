import { Navigation } from './Navigation';
import { SiteTitle } from './SiteTitle.jsx';

function NavBar() {
  return (
    <div className="w-dvw mx-[-2rem] border-b border-gray-300 hover:shadow-[0_1px_3px] hover:shadow-indigo-200">
      <div className="max-w-[1440px] mx-auto h-24 md:h-16 px-4 flex justify-center md:justify-between flex-col md:flex-row gap-2">
        <SiteTitle />
        <Navigation />
      </div>
    </div>
  );
}

export { NavBar };
