import { IndianRupee, FileText } from "lucide-react";

export default function FundingPage() {
  return (
    <div className="max-w-[430px] mx-auto px-4 pb-24 pt-4 space-y-6">
      {/* Page Heading */}
      <div>
        <h1 className="text-xl font-bold text-gray-900">Your Contributions</h1>
        <p className="text-sm text-gray-500">
          Complete transparency of your payments and usage.
        </p>
      </div>

      {/* Total Contribution Card */}
      <div className="bg-orange-500 text-white rounded-2xl p-5 shadow-md">
        <p className="text-sm opacity-90">Total Contributed</p>
        <div className="flex items-center gap-2 mt-1">
          <IndianRupee size={22} />
          <span className="text-3xl font-bold">4,250</span>
        </div>
        <p className="text-xs mt-1 opacity-80">Across 6 transactions</p>
      </div>

      {/* Breakdown Section */}
      <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 space-y-3">
        <h2 className="text-sm font-semibold text-orange-700">
          Fund Utilization
        </h2>

        <div className="flex justify-between text-sm">
          <span className="text-gray-700">Event Materials</span>
          <span className="font-semibold text-orange-600">₹2,000</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-700">Distribution</span>
          <span className="font-semibold text-orange-600">₹1,200</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-700">Logistics</span>
          <span className="font-semibold text-orange-600">₹1,050</span>
        </div>
      </div>

      {/* Recent Transactions */}
      <div>
        <h2 className="text-sm font-semibold text-gray-800 mb-3">
          Recent Payments
        </h2>

        <div className="space-y-3">
          <div className="flex justify-between items-center bg-white border border-orange-100 rounded-xl p-3">
            <div>
              <p className="text-sm font-medium text-gray-900">
                Maha Shivratri Contribution
              </p>
              <p className="text-xs text-gray-500">10 Feb • UPI</p>
            </div>
            <span className="text-sm font-semibold text-orange-600">
              ₹1,000
            </span>
          </div>

          <div className="flex justify-between items-center bg-white border border-orange-100 rounded-xl p-3">
            <div>
              <p className="text-sm font-medium text-gray-900">Donation</p>
              <p className="text-xs text-gray-500">02 Feb • Card</p>
            </div>
            <span className="text-sm font-semibold text-orange-600">₹750</span>
          </div>
        </div>
      </div>

      {/* Download Statement */}
      <button className="w-full bg-orange-500 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-orange-600 transition">
        <FileText size={18} />
        Download Statement
      </button>
    </div>
  );
}
