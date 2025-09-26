const Hero = ({ onBook }) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2022/08/23083441/Car-Wash-Home-Service-_-Cover-23-8-22.jpg')",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative bg-white/80 backdrop-blur-md max-w-3xl mx-auto p-6 sm:p-10 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Premium Car Cleaning{" "}
          <span className="text-slate-600">at Home</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg lg:text-xl text-slate-600">
          Foam wash, deep interior vacuum, steam clean, waxing and tire shine.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={onBook}
            className="px-6 py-3 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 transition"
          >
            Book a slot
          </button>
          <a
            href="#pricing"
            className="px-6 py-3 rounded-2xl border border-slate-300 hover:bg-slate-50 transition"
          >
            See pricing
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
