import { CoordinatesInput } from './CoordinatesInput';

function CoordinatesFieldset({ labels, oldValues }) {
  return (
    <fieldset>
      <legend className="block mt-6 text-gray-700 font-bold text-2xl">
        Coordinates
      </legend>
      <div className="flex items-center gap-4">
        <CoordinatesInput label={labels.x} oldValue={oldValues.x} />
        <CoordinatesInput label={labels.y} oldValue={oldValues.y} />
        <CoordinatesInput label={labels.z} oldValue={oldValues.z} />
      </div>
    </fieldset>
  );
}

export { CoordinatesFieldset };
