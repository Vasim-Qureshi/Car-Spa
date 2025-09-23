// Generic wrapper for sections
const Section = ({ title, subtitle, children }) => {
    return (
        <section className="py-16" id={title.toLowerCase().split(" ")[0]}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight" id={title.toLowerCase().replace(/\s+/g, "-")}>{title}</h2>
                    {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
                </div>
                <div className="mt-10">{children}</div>
            </div>
        </section>
    );
}
export default Section;