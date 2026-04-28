import React from 'react';

export interface DeliverableItem {
  title: string;
  description?: string;
  thumbnail?: string;
}

export function DeliverablePreview({ items }: { items: DeliverableItem[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <div
          key={it.title}
          className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:shadow-md"
        >
          <div className="mb-3 h-36 overflow-hidden rounded-md bg-slate-50">
            {it.thumbnail ? (
              <img src={it.thumbnail} alt={it.title} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-slate-400">
                No preview
              </div>
            )}
          </div>

          <h4 className="mb-1 font-semibold">{it.title}</h4>
          <p className="text-sm text-slate-600">
            {it.description || 'No description provided'}
          </p>
        </div>
      ))}
    </div>
  );
}

export default DeliverablePreview;