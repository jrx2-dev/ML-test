import classes from "./Breadcrumb.module.scss";

interface BreadcrumbProps {
  text: string;
  last: boolean;
}

const Breadcrumb = (props: BreadcrumbProps): JSX.Element => {
  const { text, last } = props;

  return (
    <>
      <span
        className={`${classes.breadcrumb} ${
          last ? classes.lastBreadcrumb : ""
        }`}
      >
        {text}
      </span>
      {!last && (
        <span
          className={`${classes.breadcrumb} ${classes.breadcrumbSeparator}`}
        >
          {">"}
        </span>
      )}
    </>
  );
};

export default Breadcrumb;
