import React from "react";

// Call To Action Component
const CTA = ({ onBook }) => {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="rounded-3xl bg-slate-900 text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-semibold">Ready for a showroom shine?</h3>
                        <p className="text-slate-300 mt-1">Book a doorstep slot in under 60 seconds.</p>
                    </div>
                    <button onClick={onBook} className="px-6 py-3 rounded-2xl bg-white text-slate-900 hover:bg-slate-100">
                        Book now
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CTA;