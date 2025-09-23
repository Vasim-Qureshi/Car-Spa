import { Sparkles } from "lucide-react";

// Floating Book Button Component
const FloatingBook = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="fixed bottom-6 right-6 px-4 py-3 rounded-2xl shadow-lg bg-slate-900 text-white hover:bg-slate-800"
        >
            <Sparkles className="w-4 h-4 inline mr-2" /> Book a slot
        </button>
    );
}

export default FloatingBook;