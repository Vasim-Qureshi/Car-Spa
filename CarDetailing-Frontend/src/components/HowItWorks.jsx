import { Calendar, MapPin, Sparkles } from "lucide-react";

const HowItWorks = () => {
    const steps = [
        {
            icon: <Calendar className="w-5 h-5" />,
            title: "Choose a slot",
            desc: "Pick date & time that fits your schedule.",
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            title: "We come to you",
            desc: "Fully equipped crew at your location.",
        },
        {
            icon: <Sparkles className="w-5 h-5" />,
            title: "Shine guaranteed",
            desc: "Walk around, approve, then pay securely.",
        },
    ];
    return (
        <ol className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
                <li key={i} className="rounded-2xl border border-slate-200 bg-white p-6">
                    <div className="p-2 rounded-xl bg-slate-100 w-fit">{s.icon}</div>
                    <h3 className="mt-3 font-semibold">{i + 1}. {s.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{s.desc}</p>
                </li>
            ))}
        </ol>
    );
}
export default HowItWorks;