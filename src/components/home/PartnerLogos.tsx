const PartnerLogos = () => {
  return (
    <section className="py-12 px-4 md:px-8 border-y border-border/50">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-muted-foreground mb-8 text-sm uppercase tracking-wider">
          Vertraut von führenden Kanzleien
        </p>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-[marquee_30s_linear_infinite] gap-16">
            {/* First set */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={`logo-${i}`}
                className="flex-shrink-0 w-32 h-12 bg-muted/50 rounded-lg flex items-center justify-center"
              >
                <span className="text-muted-foreground/50 font-medium">Kanzlei {i}</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={`logo-dup-${i}`}
                className="flex-shrink-0 w-32 h-12 bg-muted/50 rounded-lg flex items-center justify-center"
              >
                <span className="text-muted-foreground/50 font-medium">Kanzlei {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
