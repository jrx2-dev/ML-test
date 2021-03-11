import { useSelector } from "react-redux";

import Breadcrumb from "../BreadCrumb/Breadcrumb";

import { RootState } from "../../store/store";

import classes from "./BreadcrumbsList.module.scss";

const BreadcrumbsList = (): JSX.Element => {
  const storedCategories = useSelector(
    (state: RootState) => state.items.categories
  );

  return (
    <div className={classes.breadcrumbsList}>
      {storedCategories.map((category: string, index: number) => (
        <Breadcrumb
          key={index}
          text={category}
          last={index + 1 === storedCategories.length}
        />
      ))}
    </div>
  );
};

export default BreadcrumbsList;
