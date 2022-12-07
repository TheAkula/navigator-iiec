import React from "react";
import { RenderItem } from "../render-item";
import { ViewsComponentsList } from "../styled";
import { requestsData } from "./types";

export const Requests = () => {
  return (
    <ViewsComponentsList>
        {requestsData?.map(el => (
            <RenderItem key={el.id} path={el.path}>{el.title}</RenderItem>
        ))}
    </ViewsComponentsList>
  );
};

