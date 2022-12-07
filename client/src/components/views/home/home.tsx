import React from "react";
import { RenderItem } from "../render-item";
import { ViewsComponentsList } from "../styled";
import { mainData } from "./types";

export const Home = () => {
  return (
    <ViewsComponentsList>
      {mainData?.map(el => (
        <RenderItem key={el.id} path={el.path}>{el.title}</RenderItem>
      ))}
    </ViewsComponentsList>
  );
};

