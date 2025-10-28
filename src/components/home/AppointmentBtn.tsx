import { GrCart } from "react-icons/gr";

export default function AppointmentBtn() {
    return (
        <button className="group bg-white hover:bg-orange-300 mt-5 ps-1.5 pe-4 py-1.5 rounded-full flex items-center gap-2 transition-colors duration-300">
            <div className="p-3 rounded-full bg-orange-300 text-white group-hover:bg-white group-hover:text-orange-300 transition-colors duration-300">
                <GrCart className="w-5 h-5" />
            </div>
            <span className="text-slate-700 group-hover:text-white transition-colors duration-300">
                Make Appointment
            </span>
        </button>
    );
}
