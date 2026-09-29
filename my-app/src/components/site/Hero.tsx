import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CalendarDays, Users, Search, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

const stats = [
  { value: 10000, suffix: "+", label: "Happy Pilgrims" },
  { value: 250, suffix: "+", label: "Annual Tours" },
  { value: 4, suffix: "", label: "Sacred Shrines" },
  { value: 15, suffix: "+", label: "Years Experience" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        const duration = 1600;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Sunrise over Himalayan peaks with a sacred temple above a river valley"
          width={1920}
          height={1088}
          className="h-[118%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/75 via-forest-deep/35 to-forest-deep/85" />
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center px-5 pt-36 pb-16 lg:px-10 lg:pt-44"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="eyebrow text-amber-200 font-semibold drop-shadow-md"
        >
          Yamunotri · Gangotri · Kedarnath · Badrinath
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 max-w-4xl text-[2.6rem] leading-[1.05] text-white font-medium sm:text-6xl lg:text-7xl drop-shadow-lg"
        >
          Experience the Sacred Journey of Char Dham with{" "}
          <em className="font-normal text-amber-300 italic drop-shadow-[0_2px_10px_rgba(251,191,36,0.4)]">Yamuna Holidays</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-7 max-w-2xl text-base leading-relaxed text-white sm:text-lg drop-shadow-sm font-medium"
        >
          Plan your spiritual journey to Yamunotri, Gangotri, Kedarnath and Badrinath with
          carefully crafted pilgrimage packages, comfortable stays, experienced guides and
          complete travel assistance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#packages"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold tracking-wide text-forest-deep transition-transform hover:scale-105 shadow-md"
          >
            Explore Packages
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/60 px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-white/15"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.6} />
            Talk to an Expert
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
          onSubmit={(e) => {
            e.preventDefault();
            document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="glass-card mt-14 grid gap-4 rounded-3xl p-5 sm:p-6 lg:grid-cols-[1.2fr_1fr_1fr_auto]"
        >
          <label className="block">
            <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-forest-deep/80">Package</span>
            <select
              className="mt-2 w-full rounded-xl border border-border bg-white/70 px-4 py-3 text-sm font-medium text-foreground outline-none focus:border-gold"
              defaultValue="char-dham"
            >
              <option value="char-dham">Complete Char Dham Yatra</option>
              <option value="do-dham">Do Dham Yatra</option>
              <option value="kedarnath">Kedarnath Yatra</option>
              <option value="badrinath">Badrinath Yatra</option>
              <option value="heli">Helicopter Package</option>
              <option value="senior">Senior Citizen Special</option>
            </select>
          </label>
          <label className="block">
            <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-forest-deep/80">
              <CalendarDays className="mr-1 inline h-3.5 w-3.5 text-forest-deep" /> Travel Date
            </span>
            <input
              type="date"
              className="mt-2 w-full rounded-xl border border-border bg-white/70 px-4 py-3 text-sm font-medium text-foreground outline-none focus:border-gold"
            />
          </label>
          <label className="block">
            <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-forest-deep/80">
              <Users className="mr-1 inline h-3.5 w-3.5 text-forest-deep" /> Travelers
            </span>
            <input
              type="number"
              min={1}
              defaultValue={2}
              className="mt-2 w-full rounded-xl border border-border bg-white/70 px-4 py-3 text-sm font-medium text-foreground outline-none focus:border-gold"
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 self-end rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            <Search className="h-4 w-4" strokeWidth={1.7} />
            Search Packages
          </button>
        </motion.form>

        <div className="mt-14 grid grid-cols-2 gap-8 border-t border-white/20 pt-10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl text-amber-300 font-semibold sm:text-5xl drop-shadow-md">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs tracking-[0.2em] text-white font-semibold uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}