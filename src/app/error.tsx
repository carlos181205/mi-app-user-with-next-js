'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm max-w-md w-full">
        <h1 className="text-2xl font-bold text-red-600 mb-2">Error</h1>
        <p className="text-slate-600 mb-4">
          Ha ocurrido un error inesperado. Por favor, intenta de nuevo.
        </p>
        <button
          onClick={() => reset()}
          className="w-full inline-flex items-center justify-center h-10 rounded-md bg-emerald-600 px-4 font-semibold text-white transition hover:bg-emerald-700"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
}
