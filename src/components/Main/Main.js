import React from "react";
import { data } from "../../data";
import HornedBeast from "../HornedBeast/HornedBeast";

export default function Main() {
  return (
    <main>
      <HornedBeast title={data[0].title} imageURL={data[0].image_url} description={data[0].description} />
      <HornedBeast title={data[1].title} imageURL={data[1].image_url} description={data[1].description} />
      <HornedBeast title={data[2].title} imageURL={data[2].image_url} description={data[2].description} />
    </main>
  );
}
