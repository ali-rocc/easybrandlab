"use client";

import React, { useState } from 'react';

export function BeforeAfterBlock({
  beforeLabel = 'Before',
  afterLabel = 'After',
  beforePreview,
  afterPreview
}: {
  beforeLabel?: string;
  afterLabel?: string;
  beforePreview?: string;
  afterPreview?: string;
}) {
  const [pos, setPos] = useState(50);

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-lg border border-slate-200">
        <div className="h-56 w-full bg-slate-100">

          <div className="relative h-full w-full">

            {/* BEFORE */}
            <img
              src={beforePreview || "/before-placeholder.jpg"}
              alt="before"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* AFTER */}
            <div
              className="absolute left-0 top-0 h-full overflow-hidden"
              style={{ width: `${pos}%` }}
            >
              <img
                src={afterPreview || "/after-placeholder.jpg"}
                alt="after"
                className="h-full w-full object-cover"
              />
            </div>

          </div>
        </div>

        {/* divider */}
        <div className="pointer-events-none absolute left-[50%] top-0 bottom-0 flex items-center justify-center">
          <div className="h-full w-px bg-white" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-sm text-slate-600">{beforeLabel}</div>

        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="w-full"
        />

        <div className="text-sm text-slate-600">{afterLabel}</div>
      </div>
    </div>
  );
}

export default BeforeAfterBlock;