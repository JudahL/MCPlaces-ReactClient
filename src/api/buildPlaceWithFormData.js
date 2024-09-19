import { placesFormLabels as labels } from "../components/Forms/PlacesFormLabels";
import { buildPlace } from "./buildPlace";

function buildPlaceWithForm(id, formData) {
  return buildPlace(
    id,
    formData.get(labels.name),
    formData.get(labels.description),
    formData.get(labels.coordsLabels.x),
    formData.get(labels.coordsLabels.y),
    formData.get(labels.coordsLabels.z)
  );
}

export { buildPlaceWithForm };