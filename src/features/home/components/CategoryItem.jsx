export default function CategoryItem({ category, onSelect }) {
  return (
    <button
      onClick={() => onSelect(category)}
      className="flex flex-col items-center w-[70px] shrink-0 focus:outline-none"
    >
      <div className="w-14 h-14 rounded-full bg-white border border-orange-300 shadow-sm overflow-hidden transition hover:shadow-md">
        <img
          src={category.logo}
          alt={category.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <span className="mt-1 text-[10px] font-medium text-center text-gray-800 line-clamp-2">
        {category.name}
      </span>
    </button>
  );
}
