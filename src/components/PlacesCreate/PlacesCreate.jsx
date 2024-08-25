import { useRef } from 'react';
import { FormInput } from '../Forms/FormInput';
import { CoordinatesInput } from '../Forms/CoordinatesInput';
import { addNewPlace } from '../../api/addNewPlace';
import { buildPlace } from '../../api/placeBuilder';

function PlacesCreate() {
  const nameInputRef = useRef();
  const descriptionInputRef = useRef();
  const xCoordsInputRef = useRef();
  const yCoordsInputRef = useRef();
  const zCoordsInputRef = useRef();

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
          Create Place
        </button>
      </form>
    </div>
  );
}

export { PlacesCreate };
