export default function CategoryItem({ name, logo }) {
  return (
    <div className="flex flex-col items-center min-w-[72px]">
      <div className="w-16 h-16 rounded-full border-4 border-orange-400 flex items-center justify-center bg-white overflow-hidden">
        <img
          src={logo}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <span className="text-xs mt-1 text-center">{name}</span>
    </div>
  );
}
