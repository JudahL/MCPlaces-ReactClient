import { useEffect, useRef, useState } from 'react';
import { FormInput } from '../Forms/FormInput';
import { CoordinatesInput } from '../Forms/CoordinatesInput';
import { addNewPlace } from '../../api/addNewPlace';
import { buildPlace, emptyPlace } from '../../api/placeBuilder';
import { useNavigate, useParams } from 'react-router-dom';
import { getPlace } from '../../api/getPlace';
import { editPlace } from '../../api/editPlace';
import { deletePlace } from '../../api/deletePlace';
import { uploadImage } from '../../api/uploadImage';

function PlacesCreate() {
  const navigate = useNavigate();
  const params = useParams();

  const [place, setPlace] = useState(null);

  const nameInputRef = useRef(null);
  const descriptionInputRef = useRef(null);
  const xCoordsInputRef = useRef(null);
  const yCoordsInputRef = useRef(null);
  const zCoordsInputRef = useRef(null);
  const imageInputRef = useRef(null);

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
    if (place.name === '') setPlace(null);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const placeToSubmit = buildPlace(
      place != null ? place.id : 0,
      nameInputRef.current.value,
      descriptionInputRef.current.value,
      xCoordsInputRef.current.value,
      yCoordsInputRef.current.value,
      zCoordsInputRef.current.value
    );
    try {
      const imageUrl = await uploadImage(imageInputRef.current.files[0]);
      placeToSubmit.imageName = imageUrl;
      isEditing
        ? await editPlace(params.placeId, placeToSubmit)
        : await addNewPlace(placeToSubmit);
      navigate('/places');
    } catch (error) {
      console.log(error);
    }
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
    isEditing ? navigate(`/places/${params.placeId}`) : navigate('/places');
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
        <input
          className="mt-4 w-full rounded-lg border border-gray-300 bg-white text-gray-600 cursor-pointer file:border-none file:bg-emerald-700 file:text-gray-50 file:rounded-l-lg file:p-2 file:hover:bg-emerald-600"
          type="file"
          accept="image/*"
          ref={imageInputRef}
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
      <button
        className="mt-4 p-2 w-full rounded-lg bg-gray-500 text-gray-50 text-xl hover:bg-gray-400"
        onClick={handleBackClick}
      >
        Back
      </button>
      {isEditing && (
        <>
          <hr className="h-px mt-8 bg-gray-500 border-0" />
          <button
            className="mt-8 p-2 w-full rounded-lg bg-red-500 text-gray-50 text-xl hover:bg-red-400"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export { PlacesCreate };
