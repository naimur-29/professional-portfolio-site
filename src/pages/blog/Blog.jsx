import React, { useEffect } from "react";

import "./Blog.css";

// import global components
import PageHeading from "../../components/PageHeading/PageHeading";

// importing local components:
import BlogCard from "./components/BlogCard/BlogCard";

// importing local data:
import { blogsData } from "./data/blogsData";

const Blog = ({ setPageTitle }) => {
  useEffect(() => {
    setPageTitle(["My", " Blog"]);
    window.scrollTo(0, 0);
  }, [setPageTitle]);

  return (
    <section className="blog-section-container">
      <PageHeading heading={["My ", "Blog"]} pageName={"Posts"} />

      <div className="blogs-container">
        {blogsData?.map((project, index) => (
          <BlogCard key={index} projectInfo={project} count={index + 1} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
