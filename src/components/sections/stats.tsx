export default function Stats() {
  const stats = [
    { number: "10B+", label: "Events Tracked" },
    { number: "99.99%", label: "Uptime SLA" },
    { number: "<50ms", label: "Latency P99" },
    { number: "$500M+", label: "Revenue Processed" },
  ];

  return (
    <section className="bg-primary py-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-blue-100 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
