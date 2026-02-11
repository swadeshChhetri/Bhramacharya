import {
  User,
  Phone,
  Mail,
  ChevronRight,
  FileText,
  ShieldCheck,
  LogOut,
} from "lucide-react";

export default function AccountPage() {
  return (
    <div className="max-w-[430px] mx-auto px-4 pb-24 pt-4 space-y-6">

      {/* Profile Card */}
      <div className="bg-orange-500 text-white rounded-2xl p-5 shadow-md">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-white text-orange-500 flex items-center justify-center text-xl font-bold">
            S
          </div>
          <div>
            <p className="text-lg font-semibold">Ritesh Kumar</p>
            <p className="text-sm opacity-90">+91 9876543210</p>
          </div>
        </div>
      </div>

      {/* Account Options */}
      <div className="bg-white border border-orange-100 rounded-2xl divide-y">

        <button className="w-full flex justify-between items-center p-4">
          <div className="flex items-center gap-3">
            <User size={18} className="text-orange-500" />
            <span className="text-sm font-medium text-gray-800">
              Edit Profile
            </span>
          </div>
          <ChevronRight size={18} className="text-gray-400" />
        </button>

        <button className="w-full flex justify-between items-center p-4">
          <div className="flex items-center gap-3">
            <FileText size={18} className="text-orange-500" />
            <span className="text-sm font-medium text-gray-800">
              My Contributions
            </span>
          </div>
          <ChevronRight size={18} className="text-gray-400" />
        </button>

        <button className="w-full flex justify-between items-center p-4">
          <div className="flex items-center gap-3">
            <ShieldCheck size={18} className="text-orange-500" />
            <span className="text-sm font-medium text-gray-800">
              Privacy & Security
            </span>
          </div>
          <ChevronRight size={18} className="text-gray-400" />
        </button>

      </div>

      {/* Support Section */}
      <div className="bg-white border border-orange-100 rounded-2xl divide-y">

        <button className="w-full flex justify-between items-center p-4">
          <div className="flex items-center gap-3">
            <Phone size={18} className="text-orange-500" />
            <span className="text-sm font-medium text-gray-800">
              Contact Support
            </span>
          </div>
          <ChevronRight size={18} className="text-gray-400" />
        </button>

        <button className="w-full flex justify-between items-center p-4">
          <div className="flex items-center gap-3">
            <Mail size={18} className="text-orange-500" />
            <span className="text-sm font-medium text-gray-800">
              Help & FAQ
            </span>
          </div>
          <ChevronRight size={18} className="text-gray-400" />
        </button>

      </div>

      {/* Logout */}
      <button className="w-full bg-orange-50 text-orange-600 border border-orange-200 py-3 rounded-xl flex items-center justify-center gap-2">
        <LogOut size={18} />
        Logout
      </button>

    </div>
  );
}
