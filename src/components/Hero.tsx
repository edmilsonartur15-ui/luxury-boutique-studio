import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-luxury.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxe Fashion Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-left max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-background mb-6 animate-fade-up">
            Elegância
            <span className="block text-gradient">Atemporal</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-background/90 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Descubra nossa coleção exclusiva de peças de luxo, 
            cuidadosamente selecionadas para quem busca sofisticação 
            e qualidade incomparável.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button className="btn-luxury group">
              Explorar Coleção
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="btn-outline-luxury bg-background/10 backdrop-blur-sm border-background text-background hover:bg-background hover:text-secondary">
              Ver Lookbook
            </Button>
          </div>

          <div className="mt-12 flex items-center space-x-8 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <div className="text-background/90">
              <div className="text-3xl font-playfair font-bold text-gradient">500+</div>
              <div className="text-sm font-medium">Peças Exclusivas</div>
            </div>
            <div className="text-background/90">
              <div className="text-3xl font-playfair font-bold text-gradient">50+</div>
              <div className="text-sm font-medium">Marcas Luxury</div>
            </div>
            <div className="text-background/90">
              <div className="text-3xl font-playfair font-bold text-gradient">24/7</div>
              <div className="text-sm font-medium">Atendimento VIP</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-background/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;