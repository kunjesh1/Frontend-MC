import React from "react";

const Tag = (props) => {
  const { tags } = props;

  return (
    <div className="flex font-bold">
      <span>Tags :</span>
      {tags.map((tag) => {
        return (
          <span>
            <u>{tag.name}</u>
          </span>
        );
      })}
    </div>
  );
};

export default Tag;
