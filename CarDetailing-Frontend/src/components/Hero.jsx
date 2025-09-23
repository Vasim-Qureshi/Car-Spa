const Hero = ({ onBook }) => {
    return (
        <section className="bg-contain bg-no-repeat sm:bg-contain sm:bg-no-repeat h-screen py-16 text-center" style={{ backgroundImage: "url('https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2022/08/23083441/Car-Wash-Home-Service-_-Cover-23-8-22.jpg')" }}>
            <div className="bg-white/80 backdrop-blur-md sm:max-w-lg max-w-3xl mx-auto p-8 rounded-xl shadow-lg sm:mt-96 md:mt-60 mt-32">
                <h1 className="text-4xl sm:text-5xl font-bold">
                    Premium Car Cleaning <span className="text-slate-600">at Home</span>
                </h1>
                <p className="mt-4 text-lg text-slate-600">
                    Foam wash, deep interior vacuum, steam clean, waxing and tire shine.
                </p>
                <div className="mt-6 flex justify-center gap-3">
                    <button onClick={onBook} className="px-5 py-3 rounded-2xl bg-slate-900 text-white hover:bg-slate-800">
                        Book a slot
                    </button>
                    <a href="#pricing" className="px-5 py-3 rounded-2xl border border-slate-300 hover:bg-slate-50">
                        See pricing
                    </a>
                </div>

            </div>
        </section>
    );
}
export default Hero;