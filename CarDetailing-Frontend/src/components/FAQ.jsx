import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// FAQ Component
const FAQ = () => {
    const items = [
        {
            q: "Do you need water and power at my location?",
            a: "We carry eco‑friendly products and typically use your tap and power outlet. If unavailable, let us know—we can arrange alternatives.",
        },
        {
            q: "How do I pay?",
            a: "Pay after service via UPI, card or cash. Digital invoice provided.",
        },
        {
            q: "What if it rains?",
            a: "We’ll reschedule at no charge or perform interior‑only service if you prefer.",
        },
    ];
    const [open, setOpen] = useState(0);
    return (
        <div id="faq" className="space-y-3">
            {items.map((item, i) => (
                <div key={i} className="border border-slate-200 rounded-2xl bg-white">
                    <button
                        className="w-full flex items-center justify-between px-5 py-4"
                        onClick={() => setOpen(open === i ? null : i)}
                    >
                        <span className="font-medium text-left pr-6">{item.q}</span>
                        <ChevronDown className={`w-5 h-5 transition ${open === i ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence initial={false}>
                        {open === i && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="px-5 pb-5 text-slate-600"
                            >
                                {item.a}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}

export default FAQ;