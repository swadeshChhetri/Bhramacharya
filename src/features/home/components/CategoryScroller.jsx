import { categories } from "../../../shared/data/categories";
import CategoryItem from "./CategoryItem";

export default function CategoryScroller({ onSelect }) {
  return (
    <div className="flex gap-3 overflow-x-auto px-4 mt-4 hide-scrollbar">
      {categories.map((cat) => (
        <CategoryItem
          key={cat.id}
          category={cat}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
