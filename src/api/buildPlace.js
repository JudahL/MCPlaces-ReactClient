import defaultImage from '../assets/defaultImage.png';

function buildPlace(id, name, description, x, y, z) {
  return {
    id: id,
    serverId: 1,
    name: name,
    description: description,
    imageName: defaultImage,
    coordinates: {
      x: x,
      y: y,
      z: z
    }
  }
}

const emptyPlace = buildPlace(0,'','','','','');

export { buildPlace, emptyPlace };