
const colorClasses = {
  red: "bg-red-500 hover:bg-red-600 text-white",
  blue: "bg-blue-500 hover:bg-blue-600 text-white",
  green: "bg-green-500 hover:bg-green-600 text-white",
};

const sizeClasses = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

export default function Button({ color = "blue", size = "medium", children, onClick }) {
  const colorClass = colorClasses[color] || colorClasses.blue;
  const sizeClass = sizeClasses[size] || sizeClasses.medium;

  return (
    <button
      className={`${colorClass} ${sizeClass} rounded transition-colors duration-200`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
