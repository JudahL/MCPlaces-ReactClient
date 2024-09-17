import { useEffect, useState } from 'react';
import { buildPlace, emptyPlace } from '../../api/placeBuilder';
import { useNavigate, useParams } from 'react-router-dom';
import { getPlace } from '../../api/getPlace';
import { editPlace } from '../../api/editPlace';
import { deletePlace } from '../../api/deletePlace';
import { PlaceForm } from '../Forms/PlaceForm';

function PlacesEdit() {
  const navigate = useNavigate();
  const params = useParams();

  const [place, setPlace] = useState(emptyPlace);

  //const imageInputRef = useRef(null);

  useEffect(() => {
    async function fetchPlace() {
      try {
        const fetchedPlace = await getPlace(params.placeId);
        setPlace(fetchedPlace);
        // TODO: Set Input Values
      } catch (err) {
        console.log(err);
        //setError(err.message);
      }
    }

    fetchPlace();
  }, [params.placeId]);

  async function handleSave(place) {
    await editPlace(params.placeId, place);
  }

  async function handleDeleteClick() {
    try {
      if (params.placeId != place.id) {
        throw new Error('Ids do not match.');
      }
      await deletePlace(params.placeId);
      navigate('/places');
    } catch (error) {
      console.log(error);
    }
  }

  async function handleBackClick() {
    navigate(`/places/${params.placeId}`);
  }

  return (
    <div className="max-w-96 mx-auto">
      <PlaceForm confirmText="Edit Place" onSave={handleSave} place={place} />
      <button
        className="mt-4 p-2 w-full rounded-lg bg-gray-500 text-gray-50 text-xl hover:bg-gray-400"
        onClick={handleBackClick}
      >
        Back
      </button>
      <hr className="h-px mt-8 bg-gray-500 border-0" />
      <button
        className="mt-8 p-2 w-full rounded-lg bg-red-500 text-gray-50 text-xl hover:bg-red-400"
        onClick={handleDeleteClick}
      >
        Delete
      </button>
    </div>
  );
}

export { PlacesEdit };
