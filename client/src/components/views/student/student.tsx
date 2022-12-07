import React from "react";
import { RenderItem } from "../render-item";
import { ViewsComponentsList } from "../styled";
import { StudentsData } from "./types";

export const Student = () => {
  return (
    <ViewsComponentsList>
      {StudentsData?.map(el => (
        <RenderItem key={el.id} path={el.path}>{el.title}</RenderItem>
      ))}
    </ViewsComponentsList>
  );
};

