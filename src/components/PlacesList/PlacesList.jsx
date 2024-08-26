import { useEffect, useState } from 'react';
import { PlaceCard } from './PlaceCard';
import { getPlaces } from '../../api/getPlaces';
import { ErrorDisplay } from '../Error/ErrorDisplay';

function PlacesList() {
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPlaces() {
      try {
        const fetchedPlaces = await getPlaces();
        setPlaces(fetchedPlaces);
      } catch (err) {
        console.log(err);
        setError(err.message);
      }
    }

    fetchPlaces();
  }, []);

  return (
    <>
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-4 gap-2">
        {places.map((place) => {
          return <PlaceCard key={place.id} place={place} />;
        })}
      </div>
      {error && <ErrorDisplay errorMessage={error} />}
    </>
  );
}

export { PlacesList };
