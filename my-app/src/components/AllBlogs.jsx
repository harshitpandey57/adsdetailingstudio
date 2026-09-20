import React, { useState, useEffect } from 'react';
import { Clock, Tag, ChevronRight, Search } from 'lucide-react';

function BlogCard({ blog, onOpen }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="blog-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onOpen}
      style={{ cursor: 'pointer' }}
    >
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

      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span className="blog-card__meta-item">
            <Clock size={12} />
            {blog.readTime}
          </span>
          <span className="blog-card__meta-dot" />
          <span className="blog-card__meta-item">{blog.date}</span>
        </div>

        <h3 className="blog-card__title">
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

export default function AllBlogs({ setView, setActiveBlog }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    fetch('http://localhost:5000/api/blogs')
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching blogs:', err);
        setLoading(false);
      });
  }, []);

  const openBlog = (id) => {
    setActiveBlog(id);
    setView('blog');
  };

  const filteredBlogs = blogs.filter((blog) => {
    const query = searchQuery.toLowerCase();
    return (
      blog.title.toLowerCase().includes(query) ||
      blog.category.toLowerCase().includes(query) ||
      blog.tag.toLowerCase().includes(query)
    );
  });

  return (
    <div className="all-blogs-page" style={{ padding: '120px 20px 80px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <div className="container-layout">
        
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#111827', marginBottom: '16px' }}>All Articles & Insights</h1>
          <p style={{ color: '#6b7280', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 32px' }}>
            Browse our complete library of detailing tips, guides, and expert advice to keep your vehicle looking its best.
          </p>
          
          <div style={{ position: 'relative', maxWidth: '500px', margin: '0 auto' }}>
            <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
            <input 
              type="text" 
              placeholder="Search by title, category, or tag..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '16px 16px 16px 48px',
                borderRadius: '50px',
                border: '1px solid #e5e7eb',
                fontSize: '1rem',
                outline: 'none',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                transition: 'all 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#ef4444'}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
            />
          </div>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <h2>Loading Articles...</h2>
          </div>
        ) : (
          <>
            {filteredBlogs.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 0', color: '#6b7280' }}>
                <h3>No articles found matching "{searchQuery}"</h3>
                <button 
                  onClick={() => setSearchQuery('')}
                  style={{ marginTop: '16px', background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Clear search
                </button>
              </div>
            ) : (
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
                gap: '32px' 
              }}>
                {filteredBlogs.map(blog => (
                  <BlogCard key={blog.id} blog={blog} onOpen={() => openBlog(blog.id)} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
