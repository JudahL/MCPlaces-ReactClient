import { useEffect, useState } from 'react';
import { PlaceCard } from './PlaceCard';
import { getPlaces } from '../../api/getPlaces';

function PlacesList() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    async function fetchPlaces() {
      try {
        const fetchedPlaces = await getPlaces();
        setPlaces(fetchedPlaces);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPlaces();
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-4 gap-2">
      {places.map((place) => {
        return <PlaceCard key={place.id} place={place} />;
      })}
    </div>
  );
}

export { PlacesList };
