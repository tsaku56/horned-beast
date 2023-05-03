import React from "react";
import data from "../../data.json";
import HornedBeast from "../HornedBeast/HornedBeast";
import "../Main/Main.css";

export default function Main() {
  const beasts = data.map((item) => {
    return <HornedBeast key={item._id} title={item.title} imageURL={item.image_url} description={item.description} />;
  });
  return <main>{beasts}</main>;
}
