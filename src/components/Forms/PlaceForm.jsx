import { LoadingButtonContent } from '../Loading/LoadingButtonContent';
import { CoordinatesFieldset } from './CoordinatesFieldset';
import { FormInput } from './FormInput';
import { ImageSelectorInput } from './ImageSelectorInput';

function PlaceForm({ onSubmit, labels, confirmText, isSaving }) {
  function getConfirmButtonContent() {
    if (isSaving) {
      return <LoadingButtonContent text="Saving..." />;
    } else {
      return confirmText;
    }
  }

  return (
    <form onSubmit={onSubmit}>
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
