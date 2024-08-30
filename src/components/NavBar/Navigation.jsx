import { NavigationButton } from './NavigationButton';

function Navigation() {
  return (
    <div className="my-auto flex justify-center md:justify-end gap-2">
      <NavigationButton linkTo="places" title="Places" />
      <NavigationButton linkTo="servers" title="Servers" />
      <NavigationButton linkTo="create-place" title="Create" />
    </div>
  );
}

export { Navigation };
