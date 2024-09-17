import { useState } from 'react';
import { LoadingButtonContent } from '../Loading/LoadingButtonContent';
import { CoordinatesFieldset } from './CoordinatesFieldset';
import { FormInput } from './FormInput';
import { ImageSelectorInput } from './ImageSelectorInput';
import { placesFormLabels as labels } from './PlacesFormLabels';
import { buildPlace, emptyPlace } from '../../api/placeBuilder';
import { useNavigate } from 'react-router-dom';
import { uploadImage } from '../../api/uploadImage';

function PlaceForm({ confirmText, onSave, place = emptyPlace }) {
  const navigate = useNavigate();

  const [isSaving, setIsSaving] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const placeToSubmit = buildPlace(
      place.id,
      formData.get(labels.name),
      formData.get(labels.description),
      formData.get(labels.coordsLabels.x),
      formData.get(labels.coordsLabels.y),
      formData.get(labels.coordsLabels.z)
    );

    try {
      setIsSaving(true);
      const imageFile = form.querySelector('input[name="Image"]').files[0];
      if (imageFile != undefined) {
        const imageUrl = await uploadImage(imageFile);
        placeToSubmit.imageName = imageUrl;
      }
      await onSave(placeToSubmit);
      setIsSaving(false);
      navigate('/places');
    } catch (error) {
      setIsSaving(false);
      console.log(error);
    }
  }

  function getConfirmButtonContent() {
    if (isSaving) {
      return <LoadingButtonContent text="Saving..." />;
    } else {
      return confirmText;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormInput type="input" label={labels.name} isRequired />
      <FormInput type="textarea" label={labels.description} />
      <ImageSelectorInput label={labels.image} />
      <CoordinatesFieldset labels={labels.coordsLabels} />
      <hr className="h-px mt-8 bg-gray-500 border-0" />
      <button
        type="submit"
        className="mt-8 p-2 w-full rounded-lg bg-emerald-700 text-gray-50 text-xl hover:bg-emerald-600"
      >
        {getConfirmButtonContent()}
      </button>
    </form>
  );
}

export { PlaceForm };
