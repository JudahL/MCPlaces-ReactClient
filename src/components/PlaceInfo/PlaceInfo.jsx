import { useNavigate, useParams } from 'react-router-dom';
import { getPlace } from '../../api/getPlace';
import { useEffect, useState } from 'react';
import { ErrorDisplay } from '../Error/ErrorDisplay';
import { LoadingContent } from '../Loading/LoadingContent';
import { BasicButton } from '../Buttons/BasicButton';

function PlaceInfo() {
  const params = useParams();
  const navigate = useNavigate();
  const [place, setPlace] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPlace() {
      try {
        const timeout = setTimeout(() => setIsLoading(true), 100);
        const fetchedPlace = await getPlace(params.placeId);
        setPlace(fetchedPlace);
        clearTimeout(timeout);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setError(err.message);
      }
    }

    fetchPlace();
  }, [params.placeId]);

  function handleBackClick() {
    navigate('/places');
  }

  function handleEditClick() {
    navigate(`/places/${params.placeId}/edit`);
  }

  const renderError = <ErrorDisplay errorMessage={error} />;
  const renderLoading = <LoadingContent text="Getting Place Data..." />;
  let renderPlaceInfo = null;

  if (place != null) {
    renderPlaceInfo = (
      <div className="mx-auto max-w-[960px]">
        <img
          className="object-contain w-full max-h-[550px] min-h-40 rounded-xl bg-gray-900 text-center text-gray-100"
          src={place.imageName}
          alt="No Image"
        />
        <div className="flex justify-between">
          <h2 className="text-xl lg:text-2xl text-gray-700 font-bold">
            {place.name}
          </h2>
          <p className="text-md lg:text-lg text-center text-gray-600">{`X:${place.coordinates.x}, Y:${place.coordinates.y}, Z:${place.coordinates.z}`}</p>
        </div>
        <div>
          <p className="text-md lg:text-lg text-gray-600">
            {place.description}
          </p>
        </div>
        <hr className="h-px my-4 lg:my-6 bg-gray-500 border-0" />
        <div className="ml-auto sm:w-[400px] flex justify-between gap-2">
          <BasicButton onClick={handleBackClick} colour="subdued">
            Back
          </BasicButton>
          <BasicButton onClick={handleEditClick} colour="primary">
            Edit
          </BasicButton>
        </div>
      </div>
    );
  }

  if (error) {
    return renderError;
  } else if (isLoading) {
    return renderLoading;
  }

  return renderPlaceInfo;
}

export default PlaceInfo;
