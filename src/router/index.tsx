import React from "react";
import { Routes, Route } from "react-router-dom";
import { LayoutRoot } from "../layout";
import { ComponentsLibrary, TemplatePage } from "../components";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<TemplatePage />} />
      <Route path="/create-components" element={<ComponentsLibrary />} />
    </Routes>
  );
};

export { Router };
