import React from "react";
import { RenderItem } from "../render-item";
import { ViewsComponentsList } from "../styled";
import { ourPrideData } from "./types";

export const OurPride = () => {
  return (
    <ViewsComponentsList>
      {ourPrideData?.map(el => (
        <RenderItem key={el.id} path={el.path}>{el.title}</RenderItem>
      ))}
    </ViewsComponentsList>
  );
};
