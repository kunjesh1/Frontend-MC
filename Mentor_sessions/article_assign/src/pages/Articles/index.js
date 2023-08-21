import React from "react";
import _ from "lodash";
import Article from "../../components/Article";

const Articles = (props) => {
  const calculateRating = () => _.random(0, 4);

  const calculateTags = () =>
    _.range(0, 4).map((_, i) => ({ id: i, name: `Tag ${i + 1}` }));

  const articles = _.range(0, 10).map((_, i) => ({
    title: `Article ${i + 1}`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: calculateRating(),
    tags: calculateTags(),
  }));

  return (
    <>
      {articles.map((article) => (
        <Article article={article} />
      ))}
    </>
  );
};

export default Articles;
