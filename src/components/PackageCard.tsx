import React from 'react';

export function PackageCard({
  name,
  price,
  timeline,
  scope,
  highlighted = false,
}: {
  name: string;
  price: string;
  timeline: string;
  scope: string[];
  highlighted?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-5 shadow-sm transition-all ${
        highlighted ? 'border-blue-600 bg-blue-50 scale-100 shadow-lg' : 'bg-white'
      }`}
    >
      <div className="mb-4 flex items-baseline justify-between">
        <h4 className="text-lg font-semibold">{name}</h4>
        <div className="text-xs text-slate-600">{timeline}</div>
      </div>

      <div className="mb-4">
        <div className="text-3xl font-bold text-slate-900">{price}</div>
        <div className="text-sm text-slate-600">Suggested price</div>
      </div>

      <ul className="mb-4 space-y-2">
        {scope.map((s) => (
          <li key={s} className="flex items-start gap-3 text-sm text-slate-700">
            <span className="mt-1 inline-block h-4 w-4 rounded-full bg-blue-600 text-white text-center text-xs">✓</span>
            <span>{s}</span>
          </li>
        ))}
      </ul>

      <button className={`btn-primary w-full ${highlighted ? '' : ''}`}>Select</button>
    </div>
  );
}

export default PackageCard;
