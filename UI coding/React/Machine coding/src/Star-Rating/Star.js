import { useState } from "react";

import StarRating from "./StarRating";

import "./style.css";

export default function Star() {
  const [rating, setRating] = useState(3);

  return (
    <div>
      <StarRating max={5} value={rating} onChange={setRating} />
    </div>
  );
}
