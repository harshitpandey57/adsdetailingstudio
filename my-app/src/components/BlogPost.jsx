import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Tag, Calendar, BookOpen, ChevronRight } from 'lucide-react';
import blogData from '../data/blogData.js';

export default function BlogPost({ blogId, setView, setActiveBlog }) {
  const [blog, setBlog] = useState(null);
  const [otherBlogs, setOtherBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const localBlogs = blogData.map(b => ({ ...b, id: `local-${b.id}` }));

    Promise.all([
      typeof blogId === 'string' && blogId.startsWith('local-')
        ? Promise.resolve({ error: "Local" })
        : fetch(`/api/blogs/${blogId}`).then(res => res.json()).catch(() => ({ error: true })),
      fetch('/api/blogs').then(res => res.json()).catch(() => [])
    ])
      .then(([dbBlogData, dbAllBlogs]) => {
        let finalBlog = null;
        if (dbBlogData && !dbBlogData.error) {
          finalBlog = dbBlogData;
        } else {
          finalBlog = localBlogs.find(b => b.id === blogId);
        }
        setBlog(finalBlog);

        const allBlogs = [...(Array.isArray(dbAllBlogs) ? dbAllBlogs : []), ...localBlogs];
        const uniqueBlogs = Array.from(new Map(allBlogs.map((b) => [b.title, b])).values());
        setOtherBlogs(uniqueBlogs.filter(b => b.id !== blogId).slice(0, 3));
        
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching blog post:', err);
        setBlog(localBlogs.find(b => b.id === blogId) || null);
        setLoading(false);
      });
  }, [blogId]);

  if (loading) {
    return (
      <div className="blog-post-page" style={{ padding: '120px 20px', textAlign: 'center' }}>
        <h2>Loading article...</h2>
      </div>
    );
  }

  if (!blog) return null;

  const { content } = blog;

  return (
    <div className="blog-post-page">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="blog-post-hero">
        <img src={blog.image} alt={blog.title} className="blog-post-hero__img" />
        <div className="blog-post-hero__overlay" />
        <div className="blog-post-hero__content container-layout">
          {/* Back button */}
          <button
            className="blog-post-back-btn"
            onClick={() => {
              setActiveBlog(null);
              setView('all-blogs');
            }}
          >
            <ArrowLeft size={16} />
            Back to Blog
          </button>

          <span className="blog-post-hero__category">{blog.category}</span>
          <h1 className="blog-post-hero__title">{blog.title}</h1>

          <div className="blog-post-hero__meta">
            <span className="blog-post-hero__meta-item">
              <Clock size={14} />
              {blog.readTime}
            </span>
            <span className="blog-post-hero__meta-dot" />
            <span className="blog-post-hero__meta-item">
              <Calendar size={14} />
              {blog.date}
            </span>
            <span className="blog-post-hero__meta-dot" />
            <span className="blog-post-hero__meta-item">
              <Tag size={14} />
              {blog.tag}
            </span>
          </div>
        </div>
      </div>

      {/* ── Article Body ─────────────────────────────────────── */}
      <div className="blog-post-body container-layout">
        <div className="blog-post-body__inner">

          {/* Intro paragraph */}
          <p className="blog-post-intro">{content.intro}</p>

          {/* Sections */}
          {content.sections.map((section, i) => (
            <div key={i} className="blog-post-section">
              {/* Section number + heading */}
              <div className="blog-post-section__heading-row">
                <span className="blog-post-section__num">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="blog-post-section__heading">{section.heading}</h2>
              </div>

              {/* Body text */}
              {section.body && (
                <p className="blog-post-section__body">{section.body}</p>
              )}

              {/* Bullet list */}
              {section.bullets && (
                <ul className="blog-post-bullet-list">
                  {section.bullets.map((b, bi) => (
                    <li key={bi} className="blog-post-bullet-item">
                      <span className="blog-post-bullet-dot" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Conclusion */}
          <div className="blog-post-conclusion">
            <BookOpen size={20} className="blog-post-conclusion__icon" />
            <p className="blog-post-conclusion__text">{content.conclusion}</p>
          </div>

          {/* Tag + back link footer */}
          <div className="blog-post-footer-row">
            <span className="blog-post-footer-tag">
              <Tag size={12} />
              {blog.tag}
            </span>
            <button
              className="blog-post-footer-back"
              onClick={() => {
                setActiveBlog(null);
                setView('all-blogs');
              }}
            >
              <ArrowLeft size={14} />
              Back to all articles
            </button>
          </div>
        </div>

        {/* ── Related Articles Sidebar ───────────────────────── */}
        <aside className="blog-post-sidebar">
          <h3 className="blog-post-sidebar__heading">More Articles</h3>
          <div className="blog-post-sidebar__list">
            {otherBlogs.map((ob) => (
              <button
                key={ob.id}
                className="blog-post-sidebar__card"
                onClick={() => {
                  setActiveBlog(ob.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="blog-post-sidebar__img-wrap">
                  <img src={ob.image} alt={ob.title} className="blog-post-sidebar__img" />
                  <span className="blog-post-sidebar__cat">{ob.category}</span>
                </div>
                <div className="blog-post-sidebar__info">
                  <p className="blog-post-sidebar__meta">
                    <Clock size={11} /> {ob.readTime}
                  </p>
                  <h4 className="blog-post-sidebar__title">{ob.title}</h4>
                  <span className="blog-post-sidebar__read">
                    Read article <ChevronRight size={12} />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </aside>
      </div>

    </div>
  );
}
