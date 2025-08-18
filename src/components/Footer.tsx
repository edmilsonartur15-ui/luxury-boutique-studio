import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const footerSections = [
    {
      title: "Loja",
      links: [
        { name: "Feminino", href: "#" },
        { name: "Masculino", href: "#" },
        { name: "Acessórios", href: "#" },
        { name: "Coleções", href: "#" },
        { name: "Sale", href: "#" },
      ],
    },
    {
      title: "Atendimento",
      links: [
        { name: "Central de Ajuda", href: "#" },
        { name: "Guia de Tamanhos", href: "#" },
        { name: "Trocas e Devoluções", href: "#" },
        { name: "Entrega e Frete", href: "#" },
        { name: "FAQ", href: "#" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { name: "Sobre Nós", href: "#" },
        { name: "Carreiras", href: "#" },
        { name: "Sustentabilidade", href: "#" },
        { name: "Imprensa", href: "#" },
        { name: "Blog", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-playfair font-bold text-gradient mb-6">
              LUXE BOUTIQUE
            </h2>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
              Há mais de uma década criando experiências de luxo através da moda. 
              Oferecemos peças exclusivas e atendimento personalizado para clientes 
              que valorizam qualidade e elegância.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-3" />
                <span className="text-sm">Av. Paulista, 1000 - São Paulo, SP</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <span className="text-sm">(11) 99999-9999</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <span className="text-sm">contato@luxeboutique.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="border-primary/20 hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="border-primary/20 hover:bg-primary hover:text-primary-foreground">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="border-primary/20 hover:bg-primary hover:text-primary-foreground">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-playfair text-lg font-semibold mb-6 text-primary">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-secondary-foreground/80 hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-12">
          <div className="max-w-2xl">
            <h3 className="font-playfair text-2xl font-semibold mb-4">
              Receba Nossas <span className="text-gradient">Novidades</span>
            </h3>
            <p className="text-secondary-foreground/80 mb-6">
              Seja o primeiro a saber sobre novas coleções, promoções exclusivas e eventos especiais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/60"
              />
              <Button className="btn-luxury whitespace-nowrap">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-foreground/60 text-sm mb-4 md:mb-0">
            © 2024 Luxe Boutique. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;