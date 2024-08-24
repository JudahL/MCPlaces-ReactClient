function NavigationButton({ title }) {
  return (
    <button className="w-24 rounded-lg text-slate-800 font-bold hover:text-emerald-600">
      {title}
    </button>
  );
}

export { NavigationButton };
