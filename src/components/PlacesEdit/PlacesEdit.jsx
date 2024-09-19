import { useEffect, useState } from 'react';
import { emptyPlace } from '../../api/buildPlace';
import { useNavigate, useParams } from 'react-router-dom';
import { getPlace } from '../../api/getPlace';
import { editPlace } from '../../api/editPlace';
import { deletePlace } from '../../api/deletePlace';
import { PlaceForm } from '../Forms/PlaceForm';
import { BasicButton } from '../Buttons/BasicButton';

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
      <BasicButton
        onClick={handleBackClick}
        colour="subdued"
        marginTop="medium"
      >
        Back
      </BasicButton>
      <hr className="h-px mt-8 mb-8 bg-gray-500 border-0" />
      <BasicButton onClick={handleDeleteClick} colour="warning">
        Delete
      </BasicButton>
    </div>
  );
}

export { PlacesEdit };
