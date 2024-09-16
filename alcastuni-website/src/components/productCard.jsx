

const ProductCard = ({ name, image, description }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;
