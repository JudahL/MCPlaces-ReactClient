import { CoordinatesInput } from './CoordinatesInput';

function CoordinatesFieldset({ labels }) {
  return (
    <fieldset>
      <legend className="block mt-6 text-gray-700 font-bold text-2xl">
        Coordinates
      </legend>
      <div className="flex items-center gap-4">
        <CoordinatesInput label={labels.x} />
        <CoordinatesInput label={labels.y} />
        <CoordinatesInput label={labels.z} />
      </div>
    </fieldset>
  );
}

export { CoordinatesFieldset };
