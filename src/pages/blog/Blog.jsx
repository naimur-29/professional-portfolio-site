import React, { useEffect } from "react";

const Blog = ({ setPageTitle }) => {
  useEffect(() => {
    setPageTitle(["My", " Blog"]);
  }, [setPageTitle]);

  return <div>blog</div>;
};

export default Blog;
