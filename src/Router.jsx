import { createBrowserRouter } from 'react-router-dom';
import { PlacesList } from './components/PlacesList/PlacesList';
import { PlacesCreate } from './components/PlacesCreate/PlacesCreate';
import { Root } from './components/Root';
import { ServersList } from './components/ServersList/ServersList';
import PlaceInfo from './components/PlaceInfo/PlaceInfo';
import { PlacesEdit } from './components/PlacesEdit/PlacesEdit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <PlacesList />,
      },
      {
        path: 'places',
        element: <PlacesList />,
      },
      {
        path: 'create-place',
        element: <PlacesCreate />,
      },
      {
        path: 'servers',
        element: <ServersList />,
      },
      {
        path: 'places/:placeId',
        element: <PlaceInfo />,
      },
      {
        path: 'places/:placeId/edit',
        element: <PlacesEdit />,
      },
    ],
  },
]);

export { router };
