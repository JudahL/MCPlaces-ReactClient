import { LoadingSpinner } from './LoadingSpinner';

function LoadingContent({ text = 'Loading...' }) {
  return (
    <div className="mx-auto mt-16 flex flex-col items-center gap-8">
      <LoadingSpinner size="large" dark />
      <h3 className="text-xl text-gray-700">{text}</h3>
    </div>
  );
}

export { LoadingContent };
