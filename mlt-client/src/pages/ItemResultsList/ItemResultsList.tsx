import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";

import { useSearchQueryParam } from "../../helpers/QueryStringHelper";

import BreadcrumbsList from "../../components/BreadcrumbsList/BreadcrumbsList";
import ItemResult from "../../components/ItemResult/ItemResult";
import Loader from "../../components/Loader/Loader";
import NotFound from "../../components/NotFound/NotFound";

import { Item } from "../../models/Interfaces";

import { RootState } from "../../store/store";
import { createItemsActions } from "../../store/actions/items.actions";

import classes from "./ItemResultsList.module.scss";

const ItemResultsList = (): JSX.Element => {
  const [items, setItems] = useState<Item[]>([]);

  const [hasError, setHasError] = useState<boolean>(false);

  const [search] = useSearchQueryParam();

  const dispatch = useDispatch();
  const storedItems = useSelector((state: RootState) => state.items.items);

  const queryItemsHandler = (result: boolean, error: string | null) => {
    if (result) {
      setHasError(false);
    }
    if (error) {
      console.error(error);
      toast("Error al intentar buscar items", { type: toast.TYPE.ERROR });
      setHasError(true);
    }
  };

  useEffect(() => {
    setItems(storedItems);
  }, [storedItems]);

  useEffect(() => {
    if (search) {
      setItems([]);
      setHasError(false);
      dispatch(createItemsActions.queryItems(search, queryItemsHandler));
    } else {
      setItems([]);
    }
  }, [search, dispatch]);

  return (
    <>
      {items && items.length > 0 ? (
        <>
          <BreadcrumbsList />
          <ul className={classes.itemsResultsList}>
            {items.map((item, i) => (
              <li className={classes.itemResultsListItem} key={i}>
                <ItemResult item={item} />
                {i + 1 !== items.length && (
                  <div className={classes.itemResultsListSeparator}></div>
                )}
              </li>
            ))}
          </ul>
        </>
      ) : search ? (
        !hasError ? (
          <Loader />
        ) : (
          <NotFound />
        )
      ) : null}
    </>
  );
};

export default ItemResultsList;
