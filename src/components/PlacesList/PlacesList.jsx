import { useEffect, useState } from 'react';
import { PlaceCard } from './PlaceCard';
import { getPlaces } from '../../api/getPlaces';
import { ErrorDisplay } from '../Error/ErrorDisplay';
import { LoadingContent } from '../Loading/LoadingContent';

function PlacesList() {
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPlaces() {
      try {
        const timeout = setTimeout(() => setIsLoading(true), 100);
        const fetchedPlaces = await getPlaces();
        setPlaces(fetchedPlaces);
        clearTimeout(timeout);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setError(err.message);
      }
    }

    fetchPlaces();
  }, []);

  const renderLoading = <LoadingContent text="Retrieving Places..." />;
  const renderError = <ErrorDisplay errorMessage={error} />;
  const renderPlaces = (
    <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-4 gap-2">
      {places.map((place) => {
        return <PlaceCard key={place.id} place={place} />;
      })}
    </div>
  );

  if (error) {
    return renderError;
  } else if (isLoading) {
    return renderLoading;
  }

  return renderPlaces;
}

export { PlacesList };
