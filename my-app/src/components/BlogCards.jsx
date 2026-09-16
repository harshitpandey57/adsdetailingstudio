import React, { useState } from 'react';
import { Clock, Tag, ChevronRight } from 'lucide-react';
import blogData from '../data/blogData';

function BlogCard({ blog, featured = false, onOpen }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`blog-card${featured ? ' blog-card--featured' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onOpen}
      style={{ cursor: 'pointer' }}
    >
      {/* Image */}
      <div className="blog-card__img-wrapper">
        <img
          src={blog.image}
          alt={blog.title}
          className={`blog-card__img${hovered ? ' blog-card__img--hovered' : ''}`}
          loading="lazy"
        />
        <div className="blog-card__img-overlay" />
        <span className="blog-card__category-badge">{blog.category}</span>
      </div>

      {/* Content */}
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span className="blog-card__meta-item">
            <Clock size={12} />
            {blog.readTime}
          </span>
          <span className="blog-card__meta-dot" />
          <span className="blog-card__meta-item">{blog.date}</span>
        </div>

        <h3 className={`blog-card__title${featured ? ' blog-card__title--featured' : ''}`}>
          {blog.title}
        </h3>

        <p className="blog-card__excerpt">{blog.excerpt}</p>

        <div className="blog-card__footer">
          <span className="blog-card__tag">
            <Tag size={10} />
            {blog.tag}
          </span>
          <button
            className="blog-card__read-btn"
            onClick={(e) => { e.stopPropagation(); onOpen(); }}
          >
            Read More
            <ChevronRight
              size={14}
              className={`blog-card__read-arrow${hovered ? ' blog-card__read-arrow--hovered' : ''}`}
            />
          </button>
        </div>
      </div>
    </article>
  );
}

export default function BlogCards({ setView, setActiveBlog }) {
  const [featured, ...rest] = blogData;

  const openBlog = (id) => {
    setActiveBlog(id);
    setView('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="blog-section" id="blog">
      <div className="container-layout">

        {/* Section Header */}
        <div className="blog-section__header">
          <div className="blog-section__header-left">
            <span className="blog-section__eyebrow">FROM THE BLOG</span>
            <h2 className="blog-section__title">
              Expert Tips &{' '}
              <span className="blog-section__title-accent">Car Care</span>{' '}
              Insights
            </h2>
            <p className="blog-section__subtitle">
              Stay informed with professional advice on detailing, protection, and maintaining your vehicle's showroom shine.
            </p>
          </div>
        </div>

        {/* Featured (left tall) + 2x2 grid (right) */}
        <div className="blog-grid">
          <div className="blog-grid__featured">
            <BlogCard
              blog={featured}
              featured
              onOpen={() => openBlog(featured.id)}
            />
          </div>
          <div className="blog-grid__rest">
            {rest.slice(0, 4).map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                onOpen={() => openBlog(blog.id)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
