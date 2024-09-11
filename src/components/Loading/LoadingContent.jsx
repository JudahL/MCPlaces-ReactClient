import { LoadingSymbol } from './LoadingSymbol';

function LoadingContent({ text = 'Loading...' }) {
  return (
    <div className="mx-auto mt-16">
      <LoadingSymbol size="large" dark />
      <h3 className="mt-8 text-xl text-center text-gray-700">{text}</h3>
    </div>
  );
}

export { LoadingContent };
