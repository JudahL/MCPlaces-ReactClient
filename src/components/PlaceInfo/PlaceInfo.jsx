import { useParams } from 'react-router-dom';
import { getPlace } from '../../api/getPlace';
import { useEffect, useState } from 'react';
import { ErrorDisplay } from '../Error/ErrorDisplay';

function PlaceInfo() {
  const params = useParams();
  const [place, setPlace] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPlace() {
      try {
        const fetchedPlace = await getPlace(params.placeId);
        setPlace(fetchedPlace);
      } catch (err) {
        console.log(err);
        setError(err.message);
      }
    }

    fetchPlace();
  }, []);

  let renderPlaceInfo = null;

  if (place != null) {
    renderPlaceInfo = (
      <div>
        <h2>{place.name}</h2>
        <p>{place.description}</p>
        <h3>Coordinates</h3>
        <p>{`X:${place.coordinates.x}, Y:${place.coordinates.y}, Z:${place.coordinates.z}`}</p>
      </div>
    );
  }

  const renderError = <ErrorDisplay errorMessage={error} />;

  const renderFinal = error ? renderError : renderPlaceInfo;

  return renderFinal;
}

export default PlaceInfo;

/**
 * return (
    
  );
 */
