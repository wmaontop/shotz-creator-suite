import { Card } from "@/components/ui/card";

export function StatsSection() {
  const stats = [
    { value: "2,500,000+", label: "Profile Views", gradient: true },
    { value: "150,000+", label: "Active Users", gradient: true },
    { value: "750,000+", label: "File Uploads", gradient: false },
    { value: "25,000+", label: "Premium Users", gradient: false },
  ];

  return (
    <section className="py-24 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Over <span className="gradient-hero bg-clip-text text-transparent">150,000 people</span> use shotz.lol
          </h2>
          <p className="text-xl text-muted-foreground">
            What are you waiting for?
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className={`p-8 text-center transition-smooth hover:scale-105 ${
                stat.gradient ? 'gradient-bg glow-primary' : 'bg-card border-border'
              }`}
            >
              <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                stat.gradient ? 'text-white' : 'gradient-hero bg-clip-text text-transparent'
              }`}>
                {stat.value}
              </div>
              <div className={`text-sm md:text-base font-medium ${
                stat.gradient ? 'text-white/90' : 'text-muted-foreground'
              }`}>
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-8">
            Create feature-rich, customizable and modern link-in-bio pages, along with fast and secure file hosting
          </p>
        </div>
      </div>
    </section>
  );
}