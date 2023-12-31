import "./ProductList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Recent Work</h1>
        <p className="pl-desc">
        Here are a few  design projects I've worked on
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product 
          key={item.id} 
          img={item.img} 
          link={item.link} 
          githup={item.githup}
          tech={item.tech}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;