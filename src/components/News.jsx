import React from "react";
import NewsCard from "./NewsCard";

function News() {
  return (
    <div className="news">
      <h1 className="news__title sub--headings">Latest News</h1>
      <div className="news__divider sub--divider" />
      <div className="grid">
    <NewsCard/>
    <NewsCard/>
    <NewsCard/>
    <NewsCard/>
      </div>
    </div>
  );
}

export default News;
