import { useEffect, useRef, useState } from 'react';
import { FormInput } from '../Forms/FormInput';
import { CoordinatesInput } from '../Forms/CoordinatesInput';
import { addNewPlace } from '../../api/addNewPlace';
import { buildPlace, emptyPlace } from '../../api/placeBuilder';
import { useNavigate, useParams } from 'react-router-dom';
import { getPlace } from '../../api/getPlace';

function PlacesCreate() {
  const navigate = useNavigate();
  const params = useParams();

  const [place, setPlace] = useState(null);

  const nameInputRef = useRef(null);
  const descriptionInputRef = useRef(null);
  const xCoordsInputRef = useRef(null);
  const yCoordsInputRef = useRef(null);
  const zCoordsInputRef = useRef(null);

  const isEditing = params.placeId != undefined;

  useEffect(() => {
    async function fetchPlace() {
      try {
        const fetchedPlace = await getPlace(params.placeId);
        setPlace(fetchedPlace);
        updateRefs(fetchedPlace);
      } catch (err) {
        console.log(err);
        //setError(err.message);
      }
    }

    isEditing ? fetchPlace() : updateRefs();
  }, [params.placeId, isEditing]);

  function updateRefs(place = emptyPlace) {
    nameInputRef.current.value = place.name;
    descriptionInputRef.current.value = place.description;
    xCoordsInputRef.current.value = place.coordinates.x;
    yCoordsInputRef.current.value = place.coordinates.y;
    zCoordsInputRef.current.value = place.coordinates.z;
    if (place == null) setPlace(null);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const place = buildPlace(
      nameInputRef.current.value,
      descriptionInputRef.current.value,
      xCoordsInputRef.current.value,
      yCoordsInputRef.current.value,
      zCoordsInputRef.current.value
    );
    try {
      await addNewPlace(place);
      navigate('/places');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="max-w-96 mx-auto">
      <form onSubmit={handleSubmit}>
        <FormInput type="input" label="Name" isRequired ref={nameInputRef} />
        <FormInput
          type="textarea"
          label="Description"
          ref={descriptionInputRef}
        />
        <fieldset>
          <legend className="block mt-6 text-gray-700 font-bold text-2xl">
            Coordinates
          </legend>
          <div className="flex items-center gap-4">
            <CoordinatesInput label="X" ref={xCoordsInputRef} />
            <CoordinatesInput label="Y" ref={yCoordsInputRef} />
            <CoordinatesInput label="Z" ref={zCoordsInputRef} />
          </div>
        </fieldset>
        <hr className="h-px mt-8 bg-gray-500 border-0" />
        <button
          type="submit"
          className="mt-8 p-2 w-full rounded-lg bg-emerald-700 text-gray-50 text-xl hover:bg-emerald-600"
        >
          {isEditing ? 'Edit' : 'Create'} Place
        </button>
      </form>
    </div>
  );
}

export { PlacesCreate };
