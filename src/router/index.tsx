import React from "react";
import { Routes, Route } from "react-router-dom";
import { LayoutRoot } from "../layout";
import { ComponentsLibrary, TemplatePage, CreatePage } from "../components";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutRoot />}>
        <Route index element={<TemplatePage />} />
        <Route path="/components-library" element={<ComponentsLibrary />} />
        <Route path="/create-page" element={<CreatePage />} />
        <Route path="/view-page" element={<CreatePage />} />
      </Route>
    </Routes>
  );
};

export { Router };
