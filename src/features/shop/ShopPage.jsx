import ProductCard from "./components/ProductCard";

const products = [
  {
    id: 1,
    title: "Shiva Puran – Complete Edition (Hardcover)",
    image: "/products/shiva-puran.jpg",
    price: 499,
    originalPrice: 899,
    rating: 4.8,
    delivery: "Delivery before Maha Shivratri",
  },
  {
    id: 2,
    title: "Maha Shivratri Puja Samagri Kit",
    image: "/products/puja-kit.jpg",
    price: 299,
    originalPrice: 599,
    rating: 4.6,
    delivery: "Delivery in 3-4 days",
  },
  {
    id: 3,
    title: "Rudraksha Mala (108 Beads)",
    image: "/products/rudraksha.jpg",
    price: 349,
    originalPrice: 799,
    rating: 4.4,
    delivery: "Delivery in 2-3 days",
  },
  {
    id: 4,
    title: "Lord Shiva Wall Frame (Premium)",
    image: "/products/shiva-frame.jpg",
    price: 399,
    originalPrice: 749,
    rating: 4.5,
    delivery: "Delivery in 4-5 days",
  },
  {
    id: 5,
    title: "Shiv Chalisa & Aarti Book (Pocket Edition)",
    image: "/products/shiv-chalisa.jpg",
    price: 149,
    originalPrice: 299,
    rating: 4.7,
    delivery: "Delivery in 2 days",
  },
  {
    id: 6,
    title: "Copper Kalash & Puja Set",
    image: "/products/kalash.jpg",
    price: 699,
    originalPrice: 1199,
    rating: 4.3,
    delivery: "Delivery before Maha Shivratri",
  },
];

export default function ShopPage() {
  return (
    <div className="max-w-[430px] mx-auto pb-24 pt-4">
      {/* Page Content Wrapper */}
      <div className="px-4">
        {/* Event Heading */}
        <div className="mb-5">
          <h1 className="text-xl font-bold text-gray-900">
            Maha Shivratri Special Sale
          </h1>
          <p className="text-sm text-gray-500 mt-1">Limited time offers.</p>
        </div>

        {/* Event Banner */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-sm font-semibold text-orange-700">
                Extra 10% Off
              </h2>
              <p className="text-xs text-orange-600">Use code: SHIVRATRI10</p>
            </div>
            <button className="bg-orange-500 text-white text-xs px-3 py-2 rounded-lg">
              Get Now
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid (separate padding for alignment consistency) */}
      <div className="px-4">
        <div className="grid grid-cols-2 gap-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
