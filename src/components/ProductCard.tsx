import { Link } from "react-router-dom";
import type { Product } from "../types/product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="border rounded-lg p-4 hover:shadow-lg transition"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-4"
      />

      <h3 className="font-semibold text-sm line-clamp-2">
        {product.title}
      </h3>

      <p className="text-gray-500 text-xs mt-1">
        {product.category}
      </p>

      <p className="font-bold mt-2">
        ${product.price}
      </p>
    </Link>
  );
}
