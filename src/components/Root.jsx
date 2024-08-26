import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar/NavBar';

function Root() {
  return (
    <div className="bg-slate-50 h-full min-h-screen">
      <div className="h-full p-2 sm:p-4 md:p-6 lg:p-8">
        <NavBar />
        <div className="max-w-[1440px] mx-auto py-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export { Root };
