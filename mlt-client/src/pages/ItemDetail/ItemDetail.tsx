import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { toast } from "react-toastify";

import { useDestructuringNumber } from "../../helpers/DestructuredNumberHelper";

import BreadcrumbsList from "../../components/BreadcrumbsList/BreadcrumbsList";
import Loader from "../../components/Loader/Loader";
import NotFound from "../../components/NotFound/NotFound";

import { Item } from "../../models/Interfaces";

import { createItemsActions } from "../../store/actions/items.actions";
import { RootState } from "../../store/store";

import classes from "./ItemDetail.module.scss";

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

const ITEM_DETAIL_IMAGE_SIZE = 680;

const ItemDetail = (props: Props): JSX.Element => {
  const { match } = props;

  const [itemId, setItemId] = useState<string | null>(null);

  const [item, setItem] = useState<Item | null>(null);

  const [hasError, setHasError] = useState<boolean>(false);

  const [integer, decimal] = useDestructuringNumber(
    item?.price.amount as number | null
  );

  const dispatch = useDispatch();
  const storedItem = useSelector((state: RootState) => state.items.item);

  const getItemHandler = (result: boolean, error: string | null) => {
    if (result) {
      setHasError(false);
    }
    if (error) {
      console.error(error);
      toast("Error al buscar el item", { type: toast.TYPE.ERROR });
      setHasError(true);
      // además del toast también se podría redirigir a un NOT FOUND
    }
  };

  useEffect(() => {
    setItemId(match.params.id);
  }, [match]);

  useEffect(() => {
    setItem(storedItem);
  }, [storedItem]);

  useEffect(() => {
    if (itemId !== null && itemId) {
      setItem(null);
      setHasError(false);
      dispatch(createItemsActions.getItems(itemId, getItemHandler));
    }
  }, [itemId, dispatch]);

  return (
    <>
      {item ? (
        <>
          <BreadcrumbsList />
          <main className={classes.main}>
            <article className={classes.detail}>
              <section className={classes.detailImageSection}>
                <figure className={classes.detailImageContainer}>
                  <img
                    className={classes.detailImage}
                    src={item.picture}
                    alt={item.title}
                    width={ITEM_DETAIL_IMAGE_SIZE}
                    height={ITEM_DETAIL_IMAGE_SIZE}
                  />
                </figure>
              </section>
              <section className={classes.detailActionSection}>
                <div className={classes.detailActionSectionContainer}>
                  <div className={classes.detailStatus}>
                    <span>{`${
                      item.condition === "new" ? "Nuevo" : "Usado"
                    }`}</span>
                    <span>{` - ${item.sold_quantity} vendidos`}</span>
                  </div>
                  <div className={classes.detailTitle}>
                    <div>{item.title}</div>
                  </div>
                  <div className={classes.detailPrice}>
                    <div className={classes.detailPriceContainer}>
                      <span className={classes.detailPriceCurrency}>
                        {item.price.currency}
                      </span>
                      <span className={classes.detailPriceInteger}>
                        {integer}
                      </span>
                      <span className={classes.detailPriceDecimal}>
                        {decimal}
                      </span>
                    </div>
                  </div>
                  <div className={classes.detailBuyContainer}>
                    <button className={classes.detailBuyButton}>Comprar</button>
                  </div>
                </div>
              </section>
              <section className={classes.detailDescriptionSection}>
                <div className={classes.detailDescriptionSectionContainer}>
                  <div className={classes.detailDescriptionTitle}>
                    Descripcion del producto
                  </div>
                  <div className={classes.detailDescription}>
                    {item.description}
                  </div>
                </div>
              </section>
            </article>
          </main>
        </>
      ) : !hasError ? (
        <Loader />
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default ItemDetail;
