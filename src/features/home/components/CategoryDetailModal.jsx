export default function CategoryDetailModal({ category, onClose }) {
 
  if (!category) return null;

  return (
    // BACKDROP
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose} // click outside closes
    >
      {/* MODAL */}
      <div
        className="relative w-[90%] max-w-lg rounded-lg bg-white text-[#3b2f1c] border border-[#d6c4a3] shadow-[0_20px_50px_rgba(60,40,20,0.4)] p-6"
        // 🔥 THIS IS CRITICAL
      >
        {/* Texture overlay */}
        <div className="absolute inset-0 bg-[url('/textures/paper-grain.png')] opacity-20 mix-blend-multiply pointer-events-none" />

        {/* Close button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-3 right-3 text-xl text-[#5a4328] hover:opacity-70"
        >
          ✕
        </button>

        {/* Content */}
        <div className="relative flex flex-col items-center text-center">
          <img
            src={category.logo}
            alt={category.name}
            className="w-28 h-28 rounded-full border border-[#b89b6a] shadow mb-4 object-cover"
          />

          <h2 className="font-serif text-xl font-semibold mb-2">
            {category.name}
          </h2>

          <p className="text-sm leading-relaxed">{category.description}</p>
        </div>
      </div>
    </div>
  );
}
