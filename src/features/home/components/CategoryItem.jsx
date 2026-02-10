export default function CategoryItem({ category, onSelect }) {
  return (
    <button
      onClick={() => onSelect(category)}
      className="flex flex-col items-center w-[88px] focus:outline-none"
    >
      <div className="w-18 h-18 rounded-full bg-white border border-orange-300 shadow-sm hover:shadow-md transition overflow-hidden">
        <img
          src={category.logo}
          alt={category.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <span className="mt-2 text-[11px] font-medium text-center text-gray-800 line-clamp-2">
        {category.name}
      </span>
    </button>
  );
}
