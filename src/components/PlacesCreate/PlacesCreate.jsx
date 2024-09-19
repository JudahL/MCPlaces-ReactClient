import { useState } from 'react';
import { addNewPlace } from '../../api/addNewPlace';
import { buildPlace } from '../../api/buildPlace';
import { useNavigate } from 'react-router-dom';
import { uploadImage } from '../../api/uploadImage';
import { PlaceForm } from '../Forms/PlaceForm';
import { placesFormLabels as labels } from '../Forms/PlacesFormLabels';

function PlacesCreate() {
  const navigate = useNavigate();

  async function onSave(place) {
    await addNewPlace(place);
  }

  async function handleBackClick() {
    navigate('/places');
  }

  return (
    <div className="max-w-96 mx-auto">
      <PlaceForm labels={labels} confirmText="Create Place" onSave={onSave} />
      <button
        className="mt-4 p-2 w-full rounded-lg bg-gray-500 text-gray-50 text-xl hover:bg-gray-400"
        onClick={handleBackClick}
      >
        Back
      </button>
    </div>
  );
}

export { PlacesCreate };
