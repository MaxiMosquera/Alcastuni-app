;
import ProductCard from "../components/productCard.jsx";

const RefrigerationClothing = () => {
  return (
    <div>
      <h2>Ropa para Frigoríficos</h2>
      <div className="product-grid">
        <ProductCard 
          name="Delantal Térmico"
          image="https://via.placeholder.com/150" 
          description="Delantal diseñado para resistir bajas temperaturas." 
        />
        <ProductCard 
          name="Chaqueta Frigorífica"
          image="https://via.placeholder.com/150" 
          description="Chaqueta de alta protección para trabajos en frío extremo." 
        />
        <ProductCard 
          name="Guantes Aislantes"
          image="https://via.placeholder.com/150" 
          description="Guantes térmicos para manipular objetos en ambientes fríos." 
        />
      </div>
    </div>
  );
};

export default RefrigerationClothing;
