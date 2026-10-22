import { Routes, Route, Navigate } from "react-router";
import { AppLayout } from "./AppLayout.tsx";
import { Content1 } from "./pages/Content1.tsx";
import { Content2 } from "./pages/Content2.tsx";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Navigate to="content1" replace />} />
      <Route path="content1" element={<Content1 />} />
      <Route path="content2" element={<Content2 />} />
      <Route path="*" element={<Navigate to="/content1" replace />} />
    </Route>
  </Routes>
)
