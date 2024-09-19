import { addNewPlace } from '../../api/addNewPlace';
import { useNavigate } from 'react-router-dom';
import { PlaceForm } from '../Forms/PlaceForm';
import { placesFormLabels as labels } from '../Forms/PlacesFormLabels';
import { BasicButton } from '../Buttons/BasicButton';

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
      <BasicButton
        onClick={handleBackClick}
        colour="subdued"
        marginTop="medium"
      >
        Back
      </BasicButton>
    </div>
  );
}

export { PlacesCreate };
