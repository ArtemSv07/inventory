import { useState } from "react";
import { products } from "../../date";
import css from "./Products.module.css";
import img from "../../icons/leptop.webp";

const Products = () => {
  const [filter, setFilter] = useState("");

  const filteredProducts = filter
    ? products.filter((product) => product.type === filter)
    : products;

  return (
    <div>
      <h2>Продукти</h2>
      <select onChange={(e) => setFilter(e.target.value)} value={filter}>
        <option value="">Всі типи</option>
        {[...new Set(products.map((p) => p.type))].map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <div>
        {filteredProducts.map((product) => (
          <div className={css.container} key={product.id}>
            <div className={css.titleContainer}>
              <img width={50} src={img} alt={product.type} />
              <h3>{product.title}</h3>
            </div>

            <p>Тип: {product.type}</p>
            <p>
              Гарантия: {new Date(product.guarantee.start).toLocaleDateString()}{" "}
              - {new Date(product.guarantee.end).toLocaleDateString()}
            </p>
            <p>
              Цена: {product.price.find((p) => p.isDefault).value}{" "}
              {product.price.find((p) => p.isDefault).symbol}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
