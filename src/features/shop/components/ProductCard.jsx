import { Star } from "lucide-react";

export default function ProductCard({ product }) {
  const discount =
    Math.round(
      ((product.originalPrice - product.price) /
        product.originalPrice) *
        100
    ) || 0;

  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden flex flex-col">
      
      {/* Image */}
      <div className="h-36 bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-1">
        
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-1 text-green-600 text-xs">
          <Star size={14} fill="currentColor" />
          <span>{product.rating}</span>
        </div>

        {/* Price */}
        <div className="mt-2">
          <span className="text-lg font-bold text-gray-900">
            ₹{product.price}
          </span>
          <span className="text-sm text-gray-400 line-through ml-2">
            ₹{product.originalPrice}
          </span>
          <span className="text-xs text-green-600 ml-2">
            {discount}% OFF
          </span>
        </div>

        <p className="text-xs text-gray-500 mt-1">
          {product.delivery}
        </p>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Get Now Button */}
        <button className="mt-3 bg-orange-500 text-white text-sm font-medium py-2 rounded-lg hover:bg-orange-600 transition">
          Get Now
        </button>
      </div>
    </div>
  );
}
