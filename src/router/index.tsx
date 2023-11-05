import React from "react";
import { Routes, Route } from "react-router-dom";
import { LayoutRoot } from "../layout";
import { ComponentsLibrary } from "../components";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutRoot />} />
      <Route path="/create-components" element={<ComponentsLibrary />} />
    </Routes>
  );
};

export { Router };
