import Banner from "@/components/banner/Banner";
import LatestPosts from "@/components/latestPosts/LatestPost";
import { getAllPosts } from "@/services/PostServices";
import React from "react";

const HomePage = async () => {
  const posts = await getAllPosts();
  console.log("object, azir", posts);

  return (
    <>
      <Banner />
      <LatestPosts posts={posts} />
    </>
  );
};

export default HomePage;
