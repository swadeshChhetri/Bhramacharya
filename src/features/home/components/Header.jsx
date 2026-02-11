import { Menu } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-4 pt-4">
      <div>
        <h1 className="text-lg font-bold text-blue-700">Brahmacharya</h1>
        {/* <p className="text-xs tracking-widest text-orange-500">VANSHI</p> */}
      </div>

      <button className="flex items-center gap-1 bg-blue-100 px-3 py-1 rounded-full text-sm">
        Hello
        🙏
      </button>
    </div>
  );
}