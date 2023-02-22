import { ArrowOutward, FavoriteBorder } from "@mui/icons-material";

type PropType = { title: string };

function ProductsGallery(props: PropType) {
  const product = {
    title: "Nokia Essential Wireless Headphones 120CM BLACK",
    category: "Audio Devices",
    price: 600000,
    discountPercentage: 59,
    image: "assets/images/product.png",
  };
  return (
    <section className="productsgallery">
      <div className="productsgallery__name row--centeraligned row--between">
        <h3>{props.title}</h3>
        <a href="#explore" className="linktxt row--centeraligned">
          Explore <ArrowOutward />
        </a>
      </div>
      <div className="productsgallery__products row--centeraligned row--between">
        {[1, 2, 3].map((ele) => {
          return (
            <div key={ele} className="card column">
              <div className="card__topbar row--centeraligned row--between">
                <span className="box box--danger">
                  {product.discountPercentage}%
                </span>
                <button className="btn btn--link box box--primary box--circle row--centeraligned">
                  <FavoriteBorder fontSize="small" />
                </button>
              </div>
              <img
                className="card__image"
                src={product.image}
                alt={`${product.title} pic`}
              />
              <div className="card__body column">
                <div className="row--centeraligned row--between">
                  <span className="card__category box box--primary">
                    {product.category}
                  </span>
                  <span className="card__price">₦{product.price}</span>
                </div>
                <h4 className="card__title">{product.title}</h4>
                <div className="card__actions row--centeraligned row--between">
                  <button className="btn btn--link">Add to Cart</button>
                  <button className="btn btn--primary card__cta">Buy Now</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProductsGallery;
