import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Users, Target, Sparkles } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            About <span className="text-primary">Elite Interior</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Albania's leading provider of premium wall panels, bringing European elegance 
            and quality to your spaces since our establishment.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Elite Interior was founded with a vision to transform Albanian interiors with world-class 
              wall paneling solutions. We understand that walls are more than just boundaries—they're 
              canvases for your creativity and expressions of your style.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our journey began with a passion for exceptional design and quality craftsmanship. 
              Today, we're proud to offer Albania's most comprehensive selection of premium wall panels, 
              from elegant wooden slats to sophisticated high-gloss finishes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each product in our collection is carefully selected for its quality, durability, and 
              aesthetic appeal. We work with leading European manufacturers to ensure our clients 
              receive nothing but the finest materials and finishes.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Quality First</h3>
              <p className="text-muted-foreground">
                We never compromise on quality. Every product meets our rigorous standards.
              </p>
            </div>

            <div className="text-center p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Customer Focus</h3>
              <p className="text-muted-foreground">
                Your satisfaction is our priority. We're here to bring your vision to life.
              </p>
            </div>

            <div className="text-center p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Precision</h3>
              <p className="text-muted-foreground">
                Attention to detail in every aspect, from selection to installation.
              </p>
            </div>

            <div className="text-center p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Constantly updating our collection with the latest designs and trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <p className="text-5xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Happy Clients</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-5xl font-bold text-primary">30+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Products</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-5xl font-bold text-primary">1000+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Projects</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-5xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
