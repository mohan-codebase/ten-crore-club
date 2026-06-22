import { Reveal } from "@/components/shared/Reveal";
import { GoldDivider } from "@/components/shared/GoldDivider";
import { BrandImage } from "@/components/shared/BrandImage";

export function RegretSection() {
  return (
    <section className="px-5 py-14 sm:px-8 md:py-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-display-lg text-balance text-cream">
            The most expensive decision you&apos;ll ever make is the one you keep{" "}
            <span className="gold-text">postponing.</span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <GoldDivider className="my-10" />
        </Reveal>

        <div className="mx-auto max-w-3xl text-center">
            <Reveal delay={160}>
              <p className="font-display text-2xl italic leading-relaxed text-gold-light/85 sm:text-[1.7rem]">
                Imagine it&apos;s 2040. You&apos;re 55. Your colleague Vikram — same
                salary, same city, same opportunities — just hit ₹10 Crore. He started
                a ₹20,000 SIP in 2025. You didn&apos;t.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-6 font-display text-2xl italic leading-relaxed text-gold-light/70 sm:text-[1.7rem]">
                Not because you couldn&apos;t. Because you were going to{" "}
                <span className="text-cream">“start next month.”</span>
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} className="mt-12">
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-10">
              <figure className="overflow-hidden rounded-xl border border-gold/50 bg-ink-card">
                <BrandImage
                  src="/images/sections/regret-vikram.png"
                  alt="Vikram at 55 — started a ₹20,000 SIP in 2025 and reached ₹10 Crore by 2040"
                  aspect="4/5"
                  imgClassName="object-[center_15%]"
                />
                <figcaption className="border-t border-gold/30 bg-ink/80 px-4 py-4 text-center">
                  <p className="font-display text-lg text-gold">Vikram</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-gold-light/60">
                    Started ₹20K SIP · 2025
                  </p>
                  <p className="mt-2 font-mono text-sm font-semibold text-cream tnum">
                    ₹10 Cr by 2040
                  </p>
                </figcaption>
              </figure>

              <figure className="overflow-hidden rounded-xl border border-line bg-ink-card opacity-90">
                <BrandImage
                  src="/images/sections/regret-postponed.png"
                  alt="You at 55 — still waiting to start investing next month"
                  aspect="4/5"
                  imgClassName="object-[center_15%] grayscale-[30%]"
                />
                <figcaption className="border-t border-line bg-ink/80 px-4 py-4 text-center">
                  <p className="font-display text-lg text-gold-light/70">You</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-gold-light/45">
                    Same salary · Same city
                  </p>
                  <p className="mt-2 font-mono text-sm font-semibold text-gold-light/55 tnum">
                    “Start next month”
                  </p>
                </figcaption>
              </figure>
            </div>
          </Reveal>

        <Reveal delay={320}>
          <div className="gold-glow mx-auto mt-12 max-w-3xl rounded-xl border border-gold/40 bg-ink/60 p-8 text-center">
            <p className="text-lg leading-relaxed text-cream sm:text-xl">
              The difference between you and Vikram isn&apos;t intelligence. It
              isn&apos;t income. It isn&apos;t luck.{" "}
              <span className="font-display text-2xl italic text-gold">
                It&apos;s one decision. Made 15 years earlier.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
