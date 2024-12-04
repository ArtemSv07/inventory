import { useState } from "react";
import { products } from "../../date";

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
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>Тип: {product.type}</p>
            <p>
              Гарантія: {new Date(product.guarantee.start).toLocaleDateString()}{" "}
              - {new Date(product.guarantee.end).toLocaleDateString()}
            </p>
            <p>
              Ціна: {product.price.find((p) => p.isDefault).value}{" "}
              {product.price.find((p) => p.isDefault).symbol}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
