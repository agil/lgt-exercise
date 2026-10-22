import { memo } from "react";
import { NavLink } from "react-router";

export const Menu = memo(() => {
  return (
    <>
      <NavLink to="/content1">MenuItem1</NavLink>
      <NavLink to="/content2">MenuItem2</NavLink>
    </>
  );
});
