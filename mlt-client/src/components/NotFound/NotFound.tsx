import classes from "./NotFound.module.scss";

const NotFound = (): JSX.Element => {
  return (
    <div className={classes.notFound}>
      <span className={classes.notFoundMessage}>
        Ups! No encuentro nada para mostrarte :(
      </span>
    </div>
  );
};

export default NotFound;
