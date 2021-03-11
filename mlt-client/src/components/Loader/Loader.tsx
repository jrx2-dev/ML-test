import SpinnerLoader from "react-loader-spinner";

import classes from "./Loader.module.scss";

// need to import this from _variables.scss in a better way (tryed :export? but without luck)
const PRIMARY_DOT_COLOR = "#ffe600";
const SECONDARY_DOT_COLOR = "#3483fa";

const Loader = (): JSX.Element => {
  return (
    <div className={classes.loaderSpinner}>
      <SpinnerLoader
        type="MutatingDots"
        color={PRIMARY_DOT_COLOR}
        secondaryColor={SECONDARY_DOT_COLOR}
        height={100}
        width={100}
      />
    </div>
  );
};

export default Loader;
