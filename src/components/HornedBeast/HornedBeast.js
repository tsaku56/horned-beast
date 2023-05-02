import React from "react";

export default function HornedBeast({ title, imageUrl, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={imageUrl} alt={description} title={title} />
      <p>{description}</p>
    </div>
  );
}
