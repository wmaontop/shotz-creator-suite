import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "0€",
      period: "Lifetime",
      description: "For beginners, link all your socials in one place.",
      features: [
        "Basic Customization",
        "Profile Analytics",
        "Basic Effects", 
        "Add Your Socials",
        "5 Custom Links"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Premium",
      price: "6.99€",
      period: "Lifetime",
      description: "Pay once. Keep it forever.",
      features: [
        "Everything in Free",
        "Unlimited Custom Links",
        "Advanced Analytics",
        "Custom Themes",
        "Priority Support",
        "File Hosting (5GB)",
        "Custom Domain",
        "Remove Branding"
      ],
      cta: "Upgrade Now",
      popular: true
    },
    {
      name: "Pro",
      price: "12.99€", 
      period: "Lifetime",
      description: "For power users and businesses.",
      features: [
        "Everything in Premium",
        "File Hosting (50GB)",
        "Advanced Integrations",
        "Team Collaboration",
        "White Label Solution",
        "API Access",
        "Custom CSS",
        "Priority Features"
      ],
      cta: "Go Pro",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Explore our exclusive plans
          </h2>
          <p className="text-xl text-muted-foreground">
            Join <span className="gradient-hero bg-clip-text text-transparent font-semibold">25,000+ premium users</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative p-8 transition-smooth hover:scale-105 ${
                plan.popular 
                  ? 'gradient-bg glow-primary border-primary' 
                  : 'bg-card border-border hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    <Star className="h-4 w-4 mr-2" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.popular ? 'text-white' : 'text-foreground'
                }`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-2">
                  <span className={`text-4xl font-bold ${
                    plan.popular ? 'text-white' : 'gradient-hero bg-clip-text text-transparent'
                  }`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ml-2 ${
                    plan.popular ? 'text-white/80' : 'text-muted-foreground'
                  }`}>
                    /{plan.period}
                  </span>
                </div>
                <p className={`text-sm ${
                  plan.popular ? 'text-white/90' : 'text-muted-foreground'
                }`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className={`h-5 w-5 mr-3 ${
                        plan.popular ? 'text-white' : 'text-primary'
                      }`} />
                      <span className={`text-sm ${
                        plan.popular ? 'text-white/90' : 'text-muted-foreground'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/signup" className="block">
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-white text-primary hover:bg-white/90' 
                      : 'gradient-bg hover:opacity-90'
                  }`}
                  size="lg"
                >
                  {plan.cta}
                  {plan.popular && <Zap className="ml-2 h-4 w-4" />}
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <Zap className="h-5 w-5 text-primary mr-2" />
            <span className="text-primary font-medium">All plans include a 30-day money-back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}