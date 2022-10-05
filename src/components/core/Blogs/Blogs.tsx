import React from "react";

import { BlogsContainer } from "../../styles/Blogs/BlogsContainer";
import BlogsData from "../../../assets/jsons/Blogs.json";

export const Blogs: React.FC = () => {
  return (
    <BlogsContainer>
      <h2 className="blogs-container">{BlogsData.title}</h2>
    </BlogsContainer>
  );
};
