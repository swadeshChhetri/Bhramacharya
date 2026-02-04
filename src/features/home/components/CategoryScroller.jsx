import { categories } from "../../../shared/data/categories";
import CategoryItem from "./CategoryItem";

export default function CategoryScroller() {
  return (
    <div className="flex gap-4 overflow-x-auto px-4 mt-4 hide-scrollbar">
      {categories.map((cat) => (
        <CategoryItem
          key={cat.id}
          name={cat.name}
          logo={cat.logo}
        />
      ))}
    </div>
  );
}
