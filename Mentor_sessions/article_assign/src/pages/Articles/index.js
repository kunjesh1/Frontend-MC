import React from "react";
import _ from "lodash";
import Article from "../../components/Article";
import { articles } from "../../utils/utils";

const Articles = (props) => {
  return (
    <>
      {articles.map((article) => (
        <Article article={article} />
      ))}
    </>
  );
};

export default Articles;
