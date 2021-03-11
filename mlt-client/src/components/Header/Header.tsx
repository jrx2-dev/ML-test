import NavBar from "../NavBar/NavBar";

import classes from "./Header.module.scss";

const Header = (): JSX.Element => {
  return (
    <header className={classes.header}>
      <NavBar />
    </header>
  );
};

export default Header;
