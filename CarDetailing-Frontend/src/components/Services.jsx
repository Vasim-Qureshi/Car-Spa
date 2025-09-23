import { Droplets, Sparkles, SprayCan } from "lucide-react";
// import { Vacuum } from "lucide-react";

const Services = () => {
    const items = [
        {
            // icon: <Vacuum className="w-6 h-6" />,
            title: "Interior deep vacuum",
            desc: "Seats, mats, boot and hard‑to‑reach crevices.",
        },
        {
            icon: <SprayCan className="w-6 h-6" />,
            title: "Foam wash + wax",
            desc: "pH‑balanced snow foam & protective wax layer.",
        },
        {
            icon: <Droplets className="w-6 h-6" />,
            title: "Steam & sanitize",
            desc: "Kills germs on touch points and AC vents.",
        },
        {
            icon: <Sparkles className="w-6 h-6" />,
            title: "Glass & trim finish",
            desc: "Crystal‑clear windows and rich black trims.",
        },
    ];
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((i, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
                    <div className="p-2 rounded-xl bg-slate-100 w-fit">{i.icon}</div>
                    <h3 className="mt-4 font-semibold">{i.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{i.desc}</p>
                </div>
            ))}
        </div>
    );
}
export default Services;