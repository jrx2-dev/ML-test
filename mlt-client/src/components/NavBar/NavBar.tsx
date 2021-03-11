import { Link } from "react-router-dom";

import PATH from "../../pages/path";

import LogoML from "../LogoML/LogoML";
import SearchBar from "../SearchBar/SearchBar";

import classes from "./NavBar.module.scss";

const NavBar = (): JSX.Element => {
  return (
    <nav className={classes.navBar}>
      <Link to={PATH.HOME}>
        <LogoML className={classes.logoWidth} />
      </Link>
      <SearchBar />
    </nav>
  );
};

export default NavBar;
