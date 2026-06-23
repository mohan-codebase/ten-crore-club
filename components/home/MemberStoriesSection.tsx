"use client";

import { Reveal } from "@/components/shared/Reveal";
import { Eyebrow } from "@/components/ui/Badge";
import { StatCounter } from "@/components/shared/StatCounter";
import { TrustStrip } from "@/components/shared/TrustStrip";
import { Avatar } from "@/components/shared/Avatar";
import { successStories } from "@/data/success-stories";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function StoryCard({
  story,
}: {
  story: (typeof successStories)[number];
}) {
  return (
    <div className="group flex h-full flex-col rounded-xl border border-line bg-ink-card/95 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_0_60px_-26px_rgba(213,160,74,0.7)]">
      <header className="flex items-center gap-3">
        <Avatar initials={story.initials} photo={story.photo} name={story.name} size={44} />
        <div>
          <p className="font-medium text-cream">{story.name}</p>
          <p className="text-xs text-gold-light/60">
            {story.profession} · {story.city} · Age {story.age}
          </p>
        </div>
      </header>

      <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-gold-light/55">
        When they joined
      </p>
      <p className="mt-1 text-sm text-gold-light/80">{story.whenJoined}</p>

      <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-gold-light/55">
        Their Ten Crore plan
      </p>
      <p className="mt-1 text-sm text-gold-light/80">{story.plan}</p>

      <p className="mt-4 font-display text-lg italic leading-relaxed text-gold-light/90">
        “{story.quote}”
      </p>

      <div className="mt-auto pt-6">
        <div className="border-t border-line pt-4">
          <StatCounter
            value={story.todayValue / 1e5}
            prefix="₹"
            suffix=" L"
            decimals={1}
            label="Portfolio today"
            duration={1600}
            threshold={0.05}
          />
          <p className="mt-2 text-xs text-gold-light/70">
            On track: <span className="text-gold">{story.onTrack}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export function MemberStoriesSection() {
  return (
    <section className="px-5 py-24 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <Eyebrow>Member Stories</Eyebrow>
          <h2 className="text-display-lg text-balance text-cream">
            Real people. Real portfolios.{" "}
            <span className="gold-text">Real crores being built.</span>
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div className="-mx-5 px-5 sm:-mx-8 sm:px-8 md:mx-0 md:px-0">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1.1}
              breakpoints={{
                640: { slidesPerView: 2.1 },
                1024: { slidesPerView: 3 },
              }}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet cursor-pointer",
              }}
              autoplay={{ delay: 5000, disableOnInteraction: true }}
              className="member-stories-swiper !pb-16"
            >
              {successStories.map((story) => (
                <SwiperSlide key={story.name} className="h-auto">
                  <StoryCard story={story} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Reveal>

        <Reveal delay={150} className="mt-4 flex justify-center">
          <TrustStrip />
        </Reveal>

        <p className="mt-6 text-center text-[11px] text-gold-light/40">
          Results may vary. These are individual member experiences and are not a
          guarantee of future performance.
        </p>
      </div>
    </section>
  );
}
