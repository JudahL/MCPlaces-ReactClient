import { SiteLogo } from './SiteLogo';

function SiteName() {
  return (
    <div className="my-auto flex gap-2">
      <SiteLogo />
      <h2 className="my-auto font-bold text-xl text-slate-900">
        Cubic Locales
      </h2>
    </div>
  );
}

export { SiteName };
