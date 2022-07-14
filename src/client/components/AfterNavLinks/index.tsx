import React from "react";
import { NavLink } from "react-router-dom";
import { useConfig } from "payload/components/utilities";

const baseClass = "after-nav-links";

const AfterNavLinks: React.FC = () => {
  const {
    routes: { admin: adminRoute },
  } = useConfig();

  return (
    <div className={baseClass}>
      <span className="nav__label">Custom Routes</span>
      <nav>
        <NavLink
          activeClassName="active"
          to={`${adminRoute}/custom-default-route`}
        >
          {"> "}Default Template
        </NavLink>
        <NavLink
          activeClassName="active"
          to={`${adminRoute}/custom-minimal-route`}
        >
          {"> "}Minimal Template
        </NavLink>
      </nav>
    </div>
  );
};

export default AfterNavLinks;
