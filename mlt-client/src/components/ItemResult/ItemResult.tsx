import { Link } from "react-router-dom";

import { useDestructuringNumber } from "../../helpers/DestructuredNumberHelper";

import PATH from "../../pages/path";

import shipping from "../../assets/ic_shipping.png";
import shipping2x from "../../assets/ic_shipping@2x.png";

import { Item } from "../../models/Interfaces";

import classes from "./ItemResult.module.scss";

interface ItemResultProps {
  item: Item;
}

const ITEM_RESULT_IMAGE_SIZE = 180;
const SHIPPING_IMAGE_SIZE = 18;

const ItemResult = (props: ItemResultProps): JSX.Element => {
  const { item } = props;

  const [integer, decimal] = useDestructuringNumber(
    item?.price.amount as number | null
  );

  return (
    <Link to={PATH.ITEM_DETAIL.replace(":id", `${item.id}`)}>
      <article className={classes.itemResult}>
        <div className={classes.thumbnailContainer}>
          <figure className={classes.thumbnailParent}>
            <img
              className={classes.thumbnail}
              src={item.picture}
              alt={item.title}
              width={ITEM_RESULT_IMAGE_SIZE}
              height={ITEM_RESULT_IMAGE_SIZE}
            />
          </figure>
        </div>
        <div className={classes.descriptionContainer}>
          <div className={classes.upDetailsContainer}>
            <div className={classes.priceShippingContainer}>
              <span
                className={classes.price}
              >{`${item.price.currency} ${integer},${decimal}`}</span>
              {item.free_shipping && (
                <span>
                  <figure className={classes.shipping}>
                    <img
                      className={classes.shippingImage}
                      src={shipping}
                      alt="Envío gratis"
                      srcSet={`${shipping} 1x, ${shipping2x} 2x`}
                      width={SHIPPING_IMAGE_SIZE}
                      height={SHIPPING_IMAGE_SIZE}
                    />
                  </figure>
                </span>
              )}
            </div>
            <div className={classes.locationContainer}>
              <span className={classes.location}>{item.city_name}</span>
            </div>
          </div>
          <div className={classes.lowerDetailsContainer}>
            <div>{item.title}</div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ItemResult;
