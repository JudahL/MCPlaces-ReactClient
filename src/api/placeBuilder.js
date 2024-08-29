import defaultImage from '../assets/defaultImage.png';

function buildPlace(name, description, x, y, z) {
  return {
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

const emptyPlace = buildPlace('','','','','');

export { buildPlace, emptyPlace };