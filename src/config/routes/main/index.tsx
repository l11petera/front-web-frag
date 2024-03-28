import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../../../pages/main/home";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route index element={<Homepage />} />
          <Route path="*" element={<Homepage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default MainRoutes;
