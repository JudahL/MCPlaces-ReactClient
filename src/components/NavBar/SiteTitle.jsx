import { SiteLogo } from './SiteLogo';

function SiteTitle() {
  return (
    <div className="my-auto flex justify-center md:justify-normal gap-2">
      <SiteLogo />
      <h2 className="my-auto font-bold text-xl text-slate-900">
        Cubic Locales
      </h2>
    </div>
  );
}

export { SiteTitle };
