import React from 'react';
import '../styles/Blog.css';

function Blog() {
  const posts = [
    {
      title: "Packaging Your App with Docker",
      url: "https://medium.com/@gegpriftimario/deploying-your-app-with-docker-a-beginners-guide-part-1-fd88b2e8db60",
      date: "Oct 3, 2025"
    },
    {
      title: "Deploying Your App Using Railway",
      url: "https://medium.com/@gegpriftimario/deploying-your-app-using-railway-4788b25b736d",
      date: "Oct 28, 2025"
    },
  ];

  return (
    <div className="blog">
      <h1 className="page-title">Blog</h1>
      <div className="blog-content">
        <h2 className="section-title">Latest Posts</h2>
        <div className="posts-list">
          {posts.map((post, index) => (
            <div key={index} className="post-item">
              <a 
                href={post.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="post-title"
              >
                {post.title}
              </a>
              <span className="post-date">{post.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;

