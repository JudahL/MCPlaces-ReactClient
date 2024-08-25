import { NavBar } from './NavBar/NavBar';
import { PlacesCreate } from './PlacesCreate/PlacesCreate';
import { PlacesList } from './PlacesList/PlacesList';

function MainContent() {
  return (
    <div className="h-full p-2 sm:p-4 md:p-6 lg:p-8">
      <NavBar />
      <div className="max-w-[1440px] mx-auto py-4">
        <PlacesList />
      </div>
    </div>
  );
}

export { MainContent };
