const partners = [
  "ETL Nelles & Kollegen",
  "B&L Berger Lindzus Lutz",
  "Quentin / Quitter & Eckhardt",
  "Dr. Schauer Steuerberater",
  "Kanzlei Kronbiegel",
  "adam, wüst & partner",
  "Rendler & Hoferer",
  "Gilpert & Kollegen",
  "Reichelt Steuerberatung",
  "Beck Steuerberatung",
];

const PartnerLogos = () => {
  return (
    <section className="py-12 px-4 md:px-8 border-y border-border/50">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-muted-foreground mb-8 text-sm uppercase tracking-wider">
          Vertraut von führenden Kanzleien
        </p>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-[marquee_40s_linear_infinite] gap-12">
            {/* First set */}
            {partners.map((name, i) => (
              <div
                key={`logo-${i}`}
                className="flex-shrink-0 px-6 py-3 bg-white rounded-xl border border-border/50 flex items-center justify-center shadow-sm"
              >
                <span className="text-secondary font-semibold whitespace-nowrap">{name}</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {partners.map((name, i) => (
              <div
                key={`logo-dup-${i}`}
                className="flex-shrink-0 px-6 py-3 bg-white rounded-xl border border-border/50 flex items-center justify-center shadow-sm"
              >
                <span className="text-secondary font-semibold whitespace-nowrap">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
