import { Star } from "lucide-react";

// Testimonials Component
const Testimonials = () => {
    const reviews = [
        {
            name: "Rahul S.",
            text: "Booked the Deep Clean—interior smells fresh and the paint is glossy. Superb job!",
        },
        { name: "Ayesha K.", text: "On-time, professional and thorough. Worth every rupee." },
        { name: "Vikram P.", text: "Showroom package made my black sedan pop. Highly recommend." },
    ];
    return (
        <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6">
                    <div className="flex items-center gap-1 text-amber-500">
                        {Array.from({ length: 5 }).map((_, j) => (
                            <Star key={j} className="w-4 h-4 fill-current" />
                        ))}
                    </div>
                    <p className="mt-3 text-slate-700">“{r.text}”</p>
                    <p className="mt-2 text-sm text-slate-500">— {r.name}</p>
                </div>
            ))}
        </div>
    );
}

export default Testimonials;