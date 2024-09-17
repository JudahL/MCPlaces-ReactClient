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
import { LoadingButtonContent } from '../Loading/LoadingButtonContent';

// These are also used as Ids so should be unique
const nameLabel = 'Name';
const descriptionLabel = 'Description';
const xCoordsLabel = 'X';
const yCoordsLabel = 'Y';
const zCoordsLabel = 'Z';

function PlacesCreate() {
  const navigate = useNavigate();
  const params = useParams();

  const [place, setPlace] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  const imageInputRef = useRef(null);

  const isEditing = params.placeId != undefined;

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

    isEditing ? fetchPlace() : null;
  }, [params.placeId, isEditing]);

  function getMainButtonContent() {
    if (isSaving) {
      return <LoadingButtonContent text="Saving..." />;
    } else if (isEditing) {
      return 'Edit Place';
    } else {
      return 'Create Place';
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const placeToSubmit = buildPlace(
      place != null ? place.id : 0,
      formData.get(nameLabel),
      formData.get(descriptionLabel),
      formData.get(xCoordsLabel),
      formData.get(yCoordsLabel),
      formData.get(zCoordsLabel)
    );

    try {
      if (imageInputRef.current.files[0] != undefined) {
        setIsSaving(true);
        const imageUrl = await uploadImage(imageInputRef.current.files[0]);
        placeToSubmit.imageName = imageUrl;
      }
      isEditing
        ? await editPlace(params.placeId, placeToSubmit)
        : await addNewPlace(placeToSubmit);
      setIsSaving(false);
      navigate('/places');
    } catch (error) {
      setIsSaving(false);
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
        <FormInput type="input" label={nameLabel} isRequired />
        <FormInput type="textarea" label={descriptionLabel} />
        <label
          htmlFor="imageSelector"
          className="block mt-6 text-gray-700 font-bold text-2xl"
        >
          Image
        </label>
        <input
          className="mt-4 w-full rounded-lg border border-gray-300 bg-white text-gray-600 cursor-pointer file:border-none file:bg-emerald-700 file:text-gray-50 file:rounded-l-lg file:p-2 file:hover:bg-emerald-600"
          type="file"
          id="imageSelector"
          accept="image/*"
          ref={imageInputRef}
        />
        <fieldset>
          <legend className="block mt-6 text-gray-700 font-bold text-2xl">
            Coordinates
          </legend>
          <div className="flex items-center gap-4">
            <CoordinatesInput label={xCoordsLabel} />
            <CoordinatesInput label={yCoordsLabel} />
            <CoordinatesInput label={zCoordsLabel} />
          </div>
        </fieldset>
        <hr className="h-px mt-8 bg-gray-500 border-0" />
        <button
          type="submit"
          className="mt-8 p-2 w-full rounded-lg bg-emerald-700 text-gray-50 text-xl hover:bg-emerald-600"
        >
          {getMainButtonContent()}
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
