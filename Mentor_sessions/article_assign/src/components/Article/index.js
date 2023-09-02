import React, { useState, useEffect } from "react";
import StarRating from "../StarRating";
import Tag from "../Tag";
import "./index.css";

const Article = (props) => {
  const { article } = props;
  const [rating, setRating] = useState(0);

  // check if rating is 0 , right now it is setting as undefined
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
      <div className="flex-container align-center space-between w-full">
        <div className="flex-item">
          <Tag tags={article?.tags} />
        </div>
        <div className="flex-item">
          <StarRating value={rating} onChange={setRating} max={5} />
        </div>
      </div>
    </div>
  );
};

export default Article;
