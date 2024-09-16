
import ProductCard from "../components/productCard.jsx";

const MedicalSupplies = () => {
  return (
    <div>
      <h2>Insumos Médicos</h2>
      <div className="product-grid">
        <ProductCard 
          name="Guantes Descartables"
          image="https://via.placeholder.com/150" 
          description="Guantes desechables para uso médico." 
        />
        <ProductCard 
          name="Mascarilla Quirúrgica"
          image="https://via.placeholder.com/150" 
          description="Mascarilla para protección durante procedimientos médicos." 
        />
        <ProductCard 
          name="Bata Quirúrgica"
          image="https://via.placeholder.com/150" 
          description="Bata estéril para cirugías y procedimientos médicos." 
        />
      </div>
    </div>
  );
};

export default MedicalSupplies;
