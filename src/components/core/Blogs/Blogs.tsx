import React from "react";

import { BlogsContainer } from "../../styles/Blogs/BlogsContainer";
import blogsData from "../../../assets/jsons/Blogs.json";

import { getLogo } from "../../../helper/getLogo";

export const Blogs: React.FC = () => {
  return (
    <BlogsContainer>
      <div className="blogs-top-section">
        <h2 className="blogs-heading">{blogsData.title}</h2>
        <p className="blogs-description">{blogsData.description}</p>
      </div>
      <div className="blogs-list">
        {blogsData.blogs.map((blog) => {
          return (
            <div className="blog" key={blog.id}>
              <img
                className="blog-image"
                src={getLogo("BlogsSampleImage")}
                alt={blog.title}
              />
              <small>{blog.publishedOn}</small>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <a className="blog-cta" href={blog.link}>
                Read More
                <img src={getLogo("ExternalLinkIcon")} alt={blog.title} />
              </a>
            </div>
          );
        })}
      </div>
    </BlogsContainer>
  );
};
