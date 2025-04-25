import {
  DollarSign,
  Euro,
  Info,
  MessageCircle,
  PhoneMissed,
  PhoneOff,
} from "lucide-react";
import { FaJava } from "react-icons/fa";

export default function OverallReport() {
  return (
    <div className="p-6">
      <h1 className="text-lg font-bold mb-6">Overall Report</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="failed-card ">
          <div className="failed-card-icon">
            <Euro size={20} className="icon1" />
          </div>

          <div className="failed-card-count">
            <p>2</p>
          </div>

          <div className="bg-[#f8e8fc] text-center py-2 text-sm text-purple-500 font-medium flex items-center justify-center gap-1 mt-2">
            Tottal Calls <Info size={12} className="icon1" />
          </div>
        </div>
        <div className="failed-card">
          <div className="failed-card-icon">
            <PhoneMissed size={20} className="icon2" />
          </div>

          <div className="failed-card-count">
            <p>2</p>
          </div>

          <div className="bg-[#edf0e3] text-center py-2 text-sm text-green-500 font-medium flex items-center justify-center gap-1 mt-2">
            Dealed Calls <Info size={12} className="icon2" />
          </div>
        </div>
        <div className="failed-card">
          <div className="failed-card-icon">
            <DollarSign size={20} className="icon3" />
          </div>

          <div className="failed-card-count">
            <p>.</p>
          </div>

          <div className="bg-[#f0e4e3] text-center py-2 text-sm text-red-400 font-medium flex items-center justify-center gap-1 mt-2">
            Failed Calls <Info size={12} className="icon3" />
          </div>
        </div>
        <div className="failed-card">
          <div className="failed-card-count">
            <p>.</p>
          </div>

          <div className="bg-[#ddede6] text-center py-2 text-sm text-green-500 font-medium flex items-center justify-center gap-1 mt-2">
            Answerd Calls <Info size={12} className="icon4" />
          </div>
        </div>
        <div className="failed-card">
          <div className="failed-card-icon">
            <PhoneOff size={20} className="icon5" />
          </div>

          <div className="failed-card-count">
            <p>2</p>
          </div>

          <div className="bg-[#ebd3e5] text-center py-2 text-sm text-pink-600 font-medium flex items-center justify-center gap-1 mt-2">
            Failed Calls <Info size={12} className="icon5" />
          </div>
        </div>
        <div className="failed-card">
          <div className="failed-card-icon">
            <PhoneOff size={20} className="icon6" />
          </div>

          <div className="failed-card-count">
            <p>2</p>
          </div>

          <div className="bg-[#d5ebf0] text-center py-2 text-sm text-sky-500 font-medium flex items-center justify-center gap-1 mt-2">
            Failed Calls <Info size={12} className="icon6" />
          </div>
        </div>
        <div className="failed-card">
          <div className="failed-card-icon">
            <PhoneOff size={20} className="icon7" />
          </div>

          <div className="failed-card-count">
            <p>2</p>
          </div>

          <div className="bg-[#f8e8fc] text-center py-2 text-sm text-purple-500 font-medium flex items-center justify-center gap-1 mt-2">
            Invalid Calls <Info size={12} className="icon7" />
          </div>
        </div>
        <div className="failed-card">
          <div className="failed-card-icon">
            <FaJava size={20} className="icon8" />
          </div>

          <div className="failed-card-count">
            <p>2</p>
          </div>

          <div className="bg-[#f4f3e8] text-center py-2 text-sm text-yellow-500 font-medium flex items-center justify-center gap-1 mt-2">
            Failed Calls <Info size={12} className="icon8" />
          </div>
        </div>
        <div className="failed-card">
          <div className="failed-card-count">
            <p></p>
          </div>

          <div className="bg-[#e8fafc] text-center py-2 text-sm text-blue-500 font-medium flex items-center justify-center gap-1 mt-2">
            Follow Ups <Info size={12} className="icon9" />
          </div>
        </div>
        <div className="failed-card">
          <div className="failed-card-icon">
            <MessageCircle size={20} className="icon0" />
          </div>

          <div className="failed-card-count">
            <p>.</p>
          </div>

          <div className="bg-[#f5e6f9] text-center py-2 text-sm text-indigo-500 font-medium flex items-center justify-center gap-1 mt-2">
            Updisposed Calls <Info size={12} className="icon0" />
          </div>
        </div>
      </div>
    </div>
  );
}
