function Footer() {
  return (
    <footer className="mx-auto h-20 max-w-[1440px]">
      <hr className="w-1/2 mx-auto border-gray-300"></hr>
      <p className="mt-3 text-md text-center text-emerald-700">
        v{import.meta.env.VITE_APP_VERSION}
      </p>
      <p className="mt-1 text-sm text-center text-gray-500">
        Created by{' '}
        <strong className="font-semibold text-emerald-700">Judah Lucas</strong>.
      </p>
    </footer>
  );
}

export { Footer };
