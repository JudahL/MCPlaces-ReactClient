import { NavBar } from './NavBar/NavBar';
import { PlacesList } from './PlacesList/PlacesList';

function MainContent() {
  return (
    <div className="h-full p-2 sm:p-4 md:p-6 lg:p-8">
      <NavBar />
      <PlacesList />
    </div>
  );
}

export { MainContent };
