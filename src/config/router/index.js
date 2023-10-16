import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Index from "../../pages";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/index" replace="true"></Navigate>}
          />
          <Route path="/index" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
