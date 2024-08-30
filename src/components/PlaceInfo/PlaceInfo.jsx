import { useNavigate, useParams } from 'react-router-dom';
import { getPlace } from '../../api/getPlace';
import { useEffect, useState } from 'react';
import { ErrorDisplay } from '../Error/ErrorDisplay';

function PlaceInfo() {
  const params = useParams();
  const navigate = useNavigate();
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

  function handleBackClick() {
    navigate('/places');
  }

  function handleEditClick() {
    navigate(`/places/${params.placeId}/edit`);
  }

  let renderPlaceInfo = null;

  if (place != null) {
    renderPlaceInfo = (
      <div className="w-full">
        <div className="mx-auto max-w-[960px]">
          <img
            className="object-contain w-full max-h-[550px] min-h-40 rounded-xl bg-gray-900 text-center text-gray-100"
            src={place.imageName}
            alt="No Image"
          />
          <div className="flex justify-between">
            <div>
              <h2 className="text-2xl text-gray-700 font-bold">{place.name}</h2>
              <p className="text-lg text-gray-600">{place.description}</p>
            </div>
            <div>
              <h3 className="text-xl text-gray-700 font-bold">Coordinates</h3>
              <p className="text-lg text-gray-600">{`X:${place.coordinates.x}, Y:${place.coordinates.y}, Z:${place.coordinates.z}`}</p>
            </div>
          </div>
          <hr className="h-px mt-8 bg-gray-500 border-0" />
          <div className="mt-8 flex justify-between gap-8">
            <button
              className="p-2 w-full rounded-lg bg-gray-500 text-gray-50 text-xl hover:bg-gray-400"
              onClick={handleBackClick}
            >
              Back
            </button>
            <button
              className="p-2 w-full rounded-lg bg-emerald-700 text-gray-50 text-xl hover:bg-emerald-600"
              onClick={handleEditClick}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    );
  }

  const renderError = <ErrorDisplay errorMessage={error} />;

  const renderFinal = error ? renderError : renderPlaceInfo;

  return renderFinal;
}

export default PlaceInfo;
