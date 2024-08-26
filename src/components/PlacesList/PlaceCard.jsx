import { useNavigate } from 'react-router-dom';

function PlaceCard({ place }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/places/${place.id}`);
  }

  return (
    <div className="p-2 hover:cursor-pointer" onClick={handleClick}>
      <img
        className="object-cover w-full h-64 sm:h-52 md:h-44 rounded-xl bg-emerald-700 hover:contrast-[0.88] text-center text-gray-100"
        src={place.imageName}
        alt="No Image"
      />
      <div className="mt-2 flex justify-between">
        <h3 className="text-gray-950 text-md font-main font-[500] hover:text-red-500">
          {place.name}
        </h3>
        <p className="text-gray-700 text-sm font-main font-[300]">
          {`x:${place.coordinates.x} z:${place.coordinates.z}`}
        </p>
      </div>
    </div>
  );
}

export { PlaceCard };
