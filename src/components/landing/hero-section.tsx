import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Link2, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Zap className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Everything you need, right here</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Everything you want,
            </span>
            <br />
            <span className="gradient-hero bg-clip-text text-transparent">
              right here.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            shotz.lol is your go-to for modern, feature-rich biolinks and fast, secure file hosting. 
            Everything you need — right here.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/signup">
              <Button size="lg" className="gradient-bg glow-primary text-lg px-8 py-6 group">
                Sign Up for Free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="#pricing">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/30 hover:border-primary">
                View Pricing
              </Button>
            </Link>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-card border border-border">
              <Link2 className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm">Modern Bio Links</span>
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-card border border-border">
              <BarChart3 className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm">Advanced Analytics</span>
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-card border border-border">
              <Zap className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm">Fast File Hosting</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5" />
    </section>
  );
}