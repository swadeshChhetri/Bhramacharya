import { Plus } from "lucide-react";

export default function FloatingActionButton() {
  return (
    <button className="absolute -top-6 left-1/2 -translate-x-1/2 bg-orange-500 w-14 h-14 rounded-full text-white shadow-lg flex items-center justify-center">
      <Plus size={28} />
    </button>
  );
}
