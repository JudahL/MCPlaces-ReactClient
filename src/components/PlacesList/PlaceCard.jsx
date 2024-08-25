function PlaceCard({ place }) {
  return (
    <div className="p-2 hover:cursor-pointer">
      <img
        className="object-cover w-full h-64 sm:h-52 md:h-44 border-1 border-gray-700 rounded-xl bg-gray-400 hover:contrast-[0.88]"
        src={place.imageName}
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
