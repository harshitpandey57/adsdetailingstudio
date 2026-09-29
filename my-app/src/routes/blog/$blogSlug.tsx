import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Tag, User, Calendar, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Closing";
import { Reveal } from "@/components/site/Reveal";
import { getBlogBySlug, getRelatedPosts, blogPosts as fallbackBlogPosts } from "@/components/site/blogData";

export const Route = createFileRoute("/blog/$blogSlug")({
  head: ({ params }) => {
    const post = getBlogBySlug(params.blogSlug);
    const title = post ? `${post.title} | Yamuna Holidays Blog` : "Blog | Yamuna Holidays";
    return {
      meta: [
        { title },
        {
          name: "description",
          content: post?.excerpt ?? "Read travel stories, pilgrimage guides and tips from Yamuna Holidays.",
        },
      ],
    };
  },
  component: BlogDetailPage,
});

function BlogDetailPage() {
  const { blogSlug } = Route.useParams();
  const [post, setPost] = useState<any>(null);
  const [related, setRelated] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_API_URL || ""}/api/blogs/${blogSlug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => {
        setPost(data);
        fetch(`${import.meta.env.VITE_API_URL || ""}/api/blogs`)
          .then(res => res.json())
          .then(allData => {
            const mergedBlogs = [...allData, ...fallbackBlogPosts];
            const uniqueBlogs = Array.from(new Map(mergedBlogs.map((b) => [b.slug, b])).values());
            const relSlugs = data.relatedSlugs || [];
            const relatedPosts = uniqueBlogs.filter((b: any) => relSlugs.includes(b.slug));
            setRelated(relatedPosts);
            setLoading(false);
          })
          .catch(() => {
            setRelated(getRelatedPosts(blogSlug));
            setLoading(false);
          });
      })
      .catch((err) => {
        console.error("Error fetching blog:", err);
        setPost(getBlogBySlug(blogSlug));
        
        fetch(`${import.meta.env.VITE_API_URL || ""}/api/blogs`)
          .then(res => res.json())
          .then(allData => {
            const staticPost = getBlogBySlug(blogSlug);
            const mergedBlogs = [...allData, ...fallbackBlogPosts];
            const uniqueBlogs = Array.from(new Map(mergedBlogs.map((b) => [b.slug, b])).values());
            const relSlugs = staticPost?.relatedSlugs || [];
            const relatedPosts = uniqueBlogs.filter((b: any) => relSlugs.includes(b.slug));
            setRelated(relatedPosts);
            setLoading(false);
          })
          .catch(() => {
            setRelated(getRelatedPosts(blogSlug));
            setLoading(false);
          });
      });
  }, [blogSlug]);

  if (loading) {
    return (
      <div className="bg-background min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center p-10">
          <div className="text-center text-muted-foreground">Loading article...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="bg-background min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center p-10">
          <div className="text-center">
            <h1 className="font-display text-5xl text-foreground">Article Not Found</h1>
            <p className="mt-4 text-muted-foreground">We could not find the article you are looking for.</p>
            <Link to="/" hash="blog" className="mt-8 inline-flex items-center gap-2 text-gold font-medium hover:underline">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* ── Hero Banner ── */}
        <section className="relative h-[70vh] min-h-[640px] flex items-end overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/95 via-forest-deep/55 to-forest-deep/20 z-0" />

          <div className="relative z-10 w-full max-w-4xl mx-auto px-5 pt-24 pb-16 lg:px-10">
            <Reveal>
              <Link
                to="/"
                hash="blog"
                className="inline-flex items-center gap-2 text-gold-soft hover:text-white text-xs tracking-[0.2em] uppercase font-medium transition-colors mb-8"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Back to Blog
              </Link>

              <span className="flex items-center w-fit gap-1.5 rounded-full bg-gold/20 border border-gold/40 px-3 py-1 text-[0.6rem] tracking-[0.22em] font-medium uppercase text-gold-soft backdrop-blur-sm mb-5">
                <Tag className="h-2.5 w-2.5" />
                {post.category}
              </span>

              <h1 className="font-display text-4xl sm:text-6xl text-white leading-[1.05] mt-3">
                {post.title}
              </h1>
              <p className="mt-4 text-white/70 text-lg leading-relaxed max-w-2xl">{post.subtitle}</p>

              <div className="mt-8 flex flex-wrap items-center gap-5 text-white/60 text-xs tracking-wide">
                <span className="inline-flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5 text-gold-soft" />
                  {post.author}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-gold-soft" />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-gold-soft" />
                  {post.readTime}
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Article Body ── */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-10 lg:grid lg:grid-cols-[1fr_320px] lg:gap-16 xl:gap-24">

            {/* Main content column */}
            <article>
              {/* Intro pull-quote */}
              <Reveal>
                <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground border-l-4 border-gold pl-6 italic">
                  {post.intro}
                </p>
              </Reveal>

              {/* Secondary image */}
              <Reveal delay={0.1} className="mt-12">
                <figure className="overflow-hidden rounded-[1.5rem] shadow-soft">
                  <img
                    src={post.secondaryImage}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-72 object-cover"
                  />
                </figure>
              </Reveal>

              {/* Body sections */}
              <div className="mt-14 space-y-14">
                {(post.sections || []).map((section: any, i: number) => (
                  <Reveal key={section.heading} delay={i * 0.06}>
                    <h2 className="font-display text-2xl sm:text-3xl text-foreground leading-snug">
                      {section.heading}
                    </h2>
                    <p className="mt-4 leading-[1.9] text-muted-foreground text-[1.05rem]">
                      {section.body}
                    </p>
                  </Reveal>
                ))}
              </div>

              {/* Tags */}
              <Reveal className="mt-16 pt-8 border-t border-border">
                <p className="eyebrow mb-4">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {(post.tags || [post.tag]).filter(Boolean).map((tag: string) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-cream px-4 py-1.5 text-xs font-medium text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>

              {/* Author bio */}
              <Reveal className="mt-10">
                <div className="flex items-center gap-4 rounded-2xl bg-cream p-6 border border-border/50">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary font-display text-2xl text-primary-foreground">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{post.author}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{post.authorRole}</p>
                  </div>
                </div>
              </Reveal>
            </article>

            {/* Sticky sidebar */}
            <aside className="mt-14 lg:mt-0">
              <Reveal delay={0.12}>
                <div className="rounded-[1.75rem] bg-card border border-border/50 shadow-soft p-7 sticky top-28">
                  <p className="eyebrow mb-5">Traveller Tips</p>
                  <ul className="space-y-5">
                    {(post.tips || []).map((tip: any) => (
                      <li key={tip.title} className="flex gap-3">
                        <span className="text-xl shrink-0">{tip.icon}</span>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{tip.title}</p>
                          <p className="text-xs leading-relaxed text-muted-foreground mt-0.5">{tip.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-8 pt-7 border-t border-border">
                    <p className="text-sm font-medium text-foreground">Ready to begin your yatra?</p>
                    <Link
                      to="/contact"
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-medium tracking-wide text-primary-foreground transition-transform hover:scale-[1.03]"
                    >
                      Talk to a Yatra Planner
                    </Link>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </section>

        {/* ── Related Articles ── */}
        {related.length > 0 && (
          <section className="bg-cream py-20 lg:py-28 border-t border-border/30">
            <div className="mx-auto max-w-7xl px-5 lg:px-10">
              <Reveal>
                <p className="eyebrow mb-3">Continue Reading</p>
                <h2 className="font-display text-3xl sm:text-4xl text-foreground">Related Articles</h2>
              </Reveal>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {related.map((rel, i) => (
                  <Reveal key={rel.slug} delay={i * 0.1}>
                    <Link to="/blog/$blogSlug" params={{ blogSlug: rel.slug }}>
                      <motion.div
                        className="group flex gap-5 rounded-[1.5rem] bg-card p-5 shadow-soft overflow-hidden border border-border/40"
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <img
                          src={rel.coverImage}
                          alt={rel.title}
                          loading="lazy"
                          className="h-24 w-24 shrink-0 rounded-xl object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <span className="eyebrow text-[0.55rem]">{rel.category}</span>
                          <h3 className="mt-1 font-display text-lg leading-snug text-foreground line-clamp-2">
                            {rel.title}
                          </h3>
                          <span className="mt-2 inline-flex items-center gap-1 text-[0.65rem] text-gold font-medium tracking-[0.15em] uppercase group-hover:gap-2 transition-all">
                            Read Article <ArrowRight className="h-3 w-3" />
                          </span>
                        </div>
                      </motion.div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
