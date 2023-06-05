import classes from "./ProductCard.module.css";
import Link from "next/link";

function ProductCard(props) {
  return (
    <Link href={`/product/${props.productId}`}>
      <div className={classes.productCard}>
        <img
          className={classes.productImg}
          src={props.productImgSrc}
          alt="image"
        />
        <p>title = {props.productTitle}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
