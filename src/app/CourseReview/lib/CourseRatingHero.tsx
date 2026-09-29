"use client";

import Image from "next/image";
import { useState } from "react";
import { BarChart2, Play, Share2, Star, Users } from "lucide-react";
import type { ReactNode } from "react";

export interface CourseHeroProps {
    title: string;
    subtitle?: string;
    author: string;
    level: string;
    rating: number;
    reviewCount: number;
    studentCount: number;
    thumbnailSrc: string;
    thumbnailAlt?: string;
    videoSrc?: string;
    onPlay?: () => void;
    onShare?: () => void;
    className?: string;
}

function Pill({ icon, children }: { icon: ReactNode; children: ReactNode }) {
    return (
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-neutral-900">
            {icon}
            {children}
        </span>
    );
}

export default function CourseRatingHero({
    title,
    subtitle,
    author,
    level,
    rating,
    reviewCount,
    studentCount,
    thumbnailSrc,
    thumbnailAlt = "",
    videoSrc,
    onPlay,
    onShare,
    className = "",
}: CourseHeroProps) {
    const [playing, setPlaying] = useState(false);

    const handlePlay = () => {
        onPlay?.();
        if (videoSrc) setPlaying(true);
    };

    return (
        <section className={`w-full ${className}`}>
            {/* Text color is inherited from the parent, so set it wherever you use this */}
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="mt-3 text-lg font-medium opacity-90">{subtitle}</p>
                    )}
                    <p className="mt-6 text-sm">
                        by <span className="font-medium text-[#d9ff1f]">{author}</span>
                    </p>
                </div>

                <div className="lg:pl-180">
                    <button
                        type="button"
                        onClick={onShare}
                        className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#d9ff1f] px-5 py-2.5 text-sm font-medium text-neutral-900 transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                        <Share2 size={16} aria-hidden />
                        Share
                    </button>
                </div>

            </div>

            <div className="mt-5 flex flex-wrap gap-3">
                <Pill icon={<BarChart2 size={16} className="text-blue-600" aria-hidden />}>
                    {level}
                </Pill>
                <Pill icon={<Star size={16} className="fill-blue-600 text-blue-600" aria-hidden />}>
                    {rating.toFixed(1)} ({reviewCount.toLocaleString()} reviews)
                </Pill>
                <Pill icon={<Users size={16} className="text-blue-600" aria-hidden />}>
                    {studentCount.toLocaleString()} Students
                </Pill>
            </div>

            <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-3xl bg-neutral-200">
                {playing && videoSrc ? (
                    <video
                        src={videoSrc}
                        controls
                        autoPlay
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <>
                        <Image
                            src={thumbnailSrc}
                            alt={thumbnailAlt}
                            fill
                            priority
                            sizes="(min-width: 1024px) 60vw, 100vw"
                            className="object-cover"
                        />
            // For later usage
                        {/* <button
              type="button"
              onClick={handlePlay}
              aria-label="Play course preview"
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-black/30 backdrop-blur-md transition hover:bg-black/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                <Play size={18} className="ml-0.5 fill-neutral-900 text-neutral-900" aria-hidden />
              </span>
            </button> */}
                    </>
                )}
            </div>
        </section>
    );
}