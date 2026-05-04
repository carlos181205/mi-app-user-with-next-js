import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-slate-950 mb-2">404</h1>
        <p className="text-slate-600 mb-4">
          La página que buscas no existe.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center h-10 rounded-md bg-emerald-600 px-6 font-semibold text-white transition hover:bg-emerald-700"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
