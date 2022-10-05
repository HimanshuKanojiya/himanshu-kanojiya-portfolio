import React from "react";

import { BlogsContainer } from "../../styles/Blogs/BlogsContainer";
import blogsData from "../../../assets/jsons/Blogs.json";

export const Blogs: React.FC = () => {
  return (
    <BlogsContainer>
      <h2 className="blogs-container">{blogsData.title}</h2>
      <p>{blogsData.description}</p>
    </BlogsContainer>
  );
};
