import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag, Search, Filter } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Closing";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { blogPosts as fallbackBlogPosts, BlogPost } from "@/components/site/blogData";

export const Route = createFileRoute("/blog/")({
  component: BlogIndexPage,
  head: () => ({
    meta: [
      { title: "Blog | Yamuna Holidays" },
      { name: "description", content: "Read travel stories, pilgrimage guides and tips from Yamuna Holidays." },
    ],
  }),
});

function BlogIndexPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL || ""}/api/blogs`)
      .then((res) => res.json())
      .then((data) => {
        // Merge dynamic blogs (data) with static blogs (fallbackBlogPosts)
        // ensure dynamic blogs come first
        const allBlogs = [...data, ...fallbackBlogPosts];
        // Remove duplicates by slug if any
        const uniqueBlogs = Array.from(new Map(allBlogs.map((b) => [b.slug, b])).values());
        setBlogs(uniqueBlogs);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setBlogs(fallbackBlogPosts);
        setLoading(false);
      });
  }, []);

  const categories = ["All", ...Array.from(new Set(blogs.map((b) => b.category)))];

  const filteredBlogs = blogs.filter((b) => {
    const matchesSearch = b.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          b.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || b.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar theme="light" />

      <main className="flex-grow pt-24 pb-20">
        <section className="bg-cream py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <SectionHeading
              eyebrow="Our Articles"
              title="Travel Stories & Guides"
              intro="Explore our collection of pilgrimage guides, travel tips, and Himalayan stories."
            />

            {/* Search and Filter */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between items-center bg-card p-4 rounded-2xl shadow-sm border border-border/50">
              <div className="relative w-full sm:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-background border border-border rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div className="relative w-full sm:w-auto flex items-center gap-3">
                <Filter className="h-4 w-4 text-muted-foreground hidden sm:block" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full sm:w-auto bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer pr-10"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground text-xs">
                  ▼
                </div>
              </div>
            </div>

            {/* Blog Grid */}
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {loading ? (
                <div className="col-span-full text-center py-20 text-muted-foreground">Loading articles...</div>
              ) : filteredBlogs.length === 0 ? (
                 <div className="col-span-full text-center py-20 text-muted-foreground">
                   <p className="text-xl font-medium text-foreground">No articles found</p>
                   <p className="mt-2">Try adjusting your search or filter criteria.</p>
                 </div>
              ) : (
                filteredBlogs.map((post, i) => (
                  <Reveal key={post.slug} delay={i * 0.05}>
                    <motion.article
                      className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-card shadow-soft"
                      whileHover={{ y: -6, boxShadow: "0 40px 80px -30px oklch(0.245 0.05 158 / 0.35)" }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {/* Image */}
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={post.coverImage || post.image}
                          alt={post.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                        />
                        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-forest-deep/80 px-3 py-1 text-[0.6rem] tracking-[0.2em] font-medium uppercase text-gold-soft backdrop-blur-sm">
                          <Tag className="h-2.5 w-2.5" />
                          {post.category}
                        </span>
                      </div>

                      {/* Body */}
                      <div className="flex flex-1 flex-col p-7">
                        <div className="flex items-center gap-3 text-[0.7rem] tracking-wide text-muted-foreground">
                          <span>{post.date}</span>
                          <span className="h-0.5 w-0.5 rounded-full bg-muted-foreground" />
                          <span className="inline-flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="mt-4 font-display text-xl leading-snug text-foreground sm:text-[1.35rem]">
                          {post.title}
                        </h3>

                        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                          {post.excerpt}
                        </p>

                        <Link
                          to="/blog/$blogSlug"
                          params={{ blogSlug: post.slug }}
                          className="mt-6 inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-gold transition-all duration-300 hover:gap-3"
                        >
                          Read Article
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>

                      <div className="h-0.5 w-0 bg-gradient-to-r from-gold to-gold-soft transition-all duration-500 group-hover:w-full" />
                    </motion.article>
                  </Reveal>
                ))
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
