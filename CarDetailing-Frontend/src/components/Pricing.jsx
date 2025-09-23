

const Pricing = ({ packages, onBook }) => {
    return (
        <div className="grid md:grid-cols-3 gap-6" id="pricing">
            {packages.map((pkg) => (
                <div key={pkg.id} className="border rounded-xl p-6 shadow">
                    <h3 className="font-semibold text-lg flex items-center gap-2">{pkg.icon}{pkg.name}</h3>
                    <p className="mt-2 text-slate-600">{pkg.time}</p>
                    <p className="mt-2 font-bold text-xl">₹{pkg.price}</p>
                    <ul className="mt-4 space-y-2 text-sm text-slate-600">
                        {pkg.features.map((f, i) => <li key={i}>✓ {f}</li>)}
                    </ul>
                    <button onClick={onBook} className="mt-6 w-full px-4 py-2 bg-slate-900 text-white rounded-xl">Book</button>
                </div>
            ))}
        </div>
    );
}
export default Pricing;