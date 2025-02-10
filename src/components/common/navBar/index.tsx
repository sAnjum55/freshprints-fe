import { NavBox } from "./style";
import { NavLink } from "react-router";

const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? "teal" : "inherit",
  textDecoration: isActive ? "underline" : "none",
  fontWeight: isActive ? "bold" : "normal",
  fontSize: 40,
});

const NavBar = () => {
  return (
    <NavBox>
      <NavLink to="/" style={navLinkStyle}>
        Home
      </NavLink>
      <NavLink to="/history" style={navLinkStyle}>
        History
      </NavLink>
    </NavBox>
  );
};

export default NavBar;
