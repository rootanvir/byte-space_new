"use client";

import { useState } from "react";
import Image from "next/image";

export interface Creator {
  slug: string;
  name: string;
  avatar: string;
  role: string;
  bio: string; 
  productCount: number;
  followerCount: number;
}

const BLUE = "#0a2cf5";
const LIME = "#d4ff1a";
const INK = "#0d0d0d";

export function CreatorHero({
  creator,
  onFollowChange,
}: {
  creator: Creator;
  onFollowChange?: (following: boolean) => void;
}) {
  const [following, setFollowing] = useState(false);

  return (
    <section
      className="relative w-full overflow-hidden text-white"
      style={{
        backgroundColor: BLUE,
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.14) 1px, transparent 1px)",
        backgroundSize: "96px 96px",
        backgroundPosition: "24px 24px",
      }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 pb-10 pt-12 md:px-10">
        <div className="flex items-start gap-4">
          <div className="relative size-20 shrink-0 overflow-hidden rounded-2xl bg-[#f9c6d0]">
            <Image src={creator.avatar} alt={creator.name} fill sizes="80px" className="object-cover" />
          </div>

          <div className="min-w-0 pt-1">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-bold leading-none tracking-tight">{creator.name}</h1>
              <span
                className="rounded-full px-4 py-1 text-xs font-medium leading-none"
                style={{ backgroundColor: LIME, color: INK }}
              >
                Creator
              </span>
            </div>
            <p className="mt-3 text-sm text-white/90">{creator.role}</p>
          </div>
        </div>

        <p className="mt-10 max-w-5xl whitespace-pre-line text-[13px] leading-[1.7] text-white/90">
          {creator.bio}
        </p>


        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-3">
            {[
              { n: creator.productCount, label: "Products" },
              { n: creator.followerCount, label: "Followers" },
            ].map(({ n, label }) => (
              <span
                key={label}
                className="inline-flex h-10 items-center gap-1.5 rounded-full bg-white px-5 text-sm"
                style={{ color: INK }}
              >
                <span className="font-medium" style={{ color: BLUE }}>{n}</span>
                {label}
              </span>
            ))}
          </div>

          <button
            type="button"
            aria-pressed={following}
            onClick={() => {
              setFollowing(!following);
              onFollowChange?.(!following);
            }}
            className="h-10 rounded-full px-7 text-sm font-medium transition hover:brightness-95"
            style={{ backgroundColor: following ? "#fff" : LIME, color: INK }}
          >
            {following ? "Following" : "Follow"}
          </button>
        </div>
      </div>
    </section>
  );
}