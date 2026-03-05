import heroCar from "@/assets/hero-car-bmw.png";

export default function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative px-4 py-6 md:py-12">
      {/* Desktop blobs */}
      <div className="blob-red hidden md:block top-0 left-0" />
      <div className="blob-blue hidden md:block bottom-0 right-0" />

      <div className="container mx-auto">
        <div className="relative rounded-2xl md:rounded-3xl bg-secondary md:glass overflow-hidden p-6 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            {/* Text */}
            <div className="flex-1 text-center md:text-left z-10">
              <span className="inline-block badge-discount mb-3">TRUSTED BY 5000+ CAR OWNERS</span>
              <h2 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl text-secondary-foreground leading-tight mb-4">
                TRANSFORM<br />YOUR RIDE
              </h2>
              <p className="text-secondary-foreground/70 text-sm md:text-base mb-6 max-w-md mx-auto md:mx-0">
                Delhi NCR's most trusted premium car service center. Expert mechanics, genuine parts, and unbeatable prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <button
                  onClick={scrollToForm}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Book A Service
                </button>
                <button
                  onClick={scrollToServices}
                  className="border border-secondary-foreground/30 text-secondary-foreground px-6 py-3 rounded-full font-semibold text-sm hover:bg-secondary-foreground/10 transition-colors"
                >
                  View Pricing
                </button>
              </div>
            </div>

            {/* Car Image */}
            <div className="flex-1 flex justify-center z-10 group">
              <img
                src={heroCar}
                alt="Premium car service by VM Auto Care"
                className="w-full max-w-lg transition-transform duration-700 ease-in-out group-hover:scale-105 group-hover:-translate-y-3 group-hover:rotate-1 group-hover:drop-shadow-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
