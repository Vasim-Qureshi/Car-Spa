import { Star, ShieldCheck, Clock3, MapPin } from "lucide-react";

const TrustBar = () => {
    return (
        <div className="border-y bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-slate-600">
                <span className="flex items-center gap-2"><Star className="w-4 h-4" /> 4.9/5 rating</span>
                <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Insured service</span>
                <span className="flex items-center gap-2"><Clock3 className="w-4 h-4" /> 7am–9pm slots</span>
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> We come to you</span>
            </div>
        </div>
    );
}
export default TrustBar;