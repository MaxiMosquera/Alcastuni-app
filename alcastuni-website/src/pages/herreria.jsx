
import ProductCard from "../components/productCard.jsx";

const StainlessSteelTools = () => {
  return (
    <div>
      <h2>Herramientas de Acero Inoxidable</h2>
      <div className="product-grid">
        <ProductCard 
          name="Cuchilla Industrial"
          image="https://via.placeholder.com/150" 
          description="Cuchilla de acero inoxidable para uso industrial." 
        />
        <ProductCard 
          name="Tijeras de Acero"
          image="https://via.placeholder.com/150" 
          description="Tijeras de precisión fabricadas en acero inoxidable." 
        />
        <ProductCard 
          name="Herramienta para Alimentos"
          image="https://via.placeholder.com/150" 
          description="Herramienta especializada para procesar alimentos." 
        />
      </div>
    </div>
  );
};

export default StainlessSteelTools;
