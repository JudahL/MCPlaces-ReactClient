function PlacesCreate() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log('Testing: handle submit event.');
  }

  return (
    <div className="max-w-96 mx-auto">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="name"
          className="block mt-6 text-gray-700 font-bold text-2xl"
        >
          Name
        </label>
        <input
          className="block w-full p-1 mt-2 border border-gray-300 text-xl text-emerald-800"
          type="text"
          id="name"
          required
        />
        <label
          htmlFor="description"
          className="block mt-6 text-gray-700 font-bold text-2xl"
        >
          Description
        </label>
        <textarea
          className="block w-full p-1 mt-2 border border-gray-300 text-md text-emerald-800"
          type="text"
          id="description"
        />
        <fieldset>
          <legend className="block mt-6 text-gray-700 font-bold text-2xl">
            Coordinates
          </legend>
          <label htmlFor="x" className="mt-4 text-gray-700 font-bold text-xl">
            X:
          </label>
          <input
            className="w-1/4 p-1 mt-2 mr-4 border border-gray-300 text-xl text-emerald-800"
            type="text"
            id="x"
          />
          <label htmlFor="y" className="mt-4 text-gray-700 font-bold text-xl">
            Y:
          </label>
          <input
            className="w-1/4 p-1 mt-2 mr-4 border border-gray-300 text-xl text-emerald-800"
            type="text"
            id="y"
          />
          <label htmlFor="z" className="mt-4 text-gray-700 font-bold text-xl">
            Z:
          </label>
          <input
            className="w-1/4 p-1 mt-2 border border-gray-300 text-xl text-emerald-800"
            type="text"
            id="z"
          />
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
