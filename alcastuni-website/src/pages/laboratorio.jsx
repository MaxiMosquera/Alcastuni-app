
import ProductCard from "../components/productCard.jsx";




const LabSupplies = () => {
  return (
    <div>
      <h2>Insumos para Laboratorio</h2>
      <div className="product-grid">
        <ProductCard 
          name="Microscopio"
          image="https://via.placeholder.com/150" 
          description="Microscopio de alta precisión para análisis de laboratorio." 
        />
        <ProductCard 
          name="Tubos de Ensayo"
          image="https://via.placeholder.com/150" 
          description="Tubos de ensayo para realizar experimentos químicos." 
        />
        <ProductCard 
          name="Centrífuga"
          image="https://via.placeholder.com/150" 
          description="Centrífuga para separar componentes líquidos en el laboratorio." 
        />
      </div>
    </div>
  );
};

export default LabSupplies;

