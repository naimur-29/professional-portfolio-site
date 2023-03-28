import React, { useEffect } from "react";

import "./Blog.css";

// import global components
import PageHeading from "../../components/PageHeading/PageHeading";

const Blog = ({ setPageTitle }) => {
  useEffect(() => {
    setPageTitle(["My", " Blog"]);
    window.scrollTo(0, 0);
  }, [setPageTitle]);

  return (
    <div>
      <PageHeading heading={["My ", "Blog"]} pageName={"Posts"} />
    </div>
  );
};

export default Blog;
