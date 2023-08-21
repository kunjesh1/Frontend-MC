import React, { useState, useEffect } from "react";
import StarRating from "../StarRating";
import Tag from "../Tag";
import "./index.css";

const Article = (props) => {
  const { article } = props;
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setRating(article?.rating);
  }, [article?.rating]);

  return (
    <div className="flex-col box justify-center align-center">
      <div id="margin-bottom" className="text-left">
        {article?.title}
      </div>
      <div>{article?.description}</div>
      <div className="image-box" />
      <div className="flex align-center space-between w-full">
        <Tag tags={article?.tags} />
        <StarRating value={rating} onChange={setRating} max={5} />
      </div>
    </div>
  );
};

export default Article;
