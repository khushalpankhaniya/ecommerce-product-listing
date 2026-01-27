import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../api/products";
import type { Product } from "../types/product";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!id) return;

    getProductById(id)
      .then(setProduct)
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  if (error) {
    return (
      <p className="text-center mt-20 text-red-500">
        {error}
      </p>
    );
  }

  if (!product) return null;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Link to="/" className="text-blue-500 mb-6 inline-block">
        ← Back to Products
      </Link>

      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/3 object-contain"
        />

        <div>
          <h1 className="text-2xl font-bold mb-2">
            {product.title}
          </h1>

          <p className="text-gray-500 mb-2">
            {product.category}
          </p>

          <p className="text-xl font-semibold mb-4">
            ${product.price}
          </p>

          <p className="text-gray-700">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}
