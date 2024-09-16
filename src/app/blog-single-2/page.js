import React from "react";
import SingleBlog from "@/components/blogs/singleBlog/SingleBlog";
import Subscription from "@/components/subscriptions/SubscriptionOne";

export const metadata = {
  title: "yugam next.js - blog-single-2",
  description: "yugam next.js multipage webdite with next.js and bootstrap",
};
const BlogSingle2 = () => {
  return (
    <>
      <SingleBlog imgTop={true} />
      <Subscription styleNum={5} />
    </>
  );
};

export default BlogSingle2;
