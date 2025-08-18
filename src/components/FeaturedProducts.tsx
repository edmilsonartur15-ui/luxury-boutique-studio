import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Star } from "lucide-react";
import productDress from "@/assets/product-dress.jpg";
import productSuit from "@/assets/product-suit.jpg";
import productBag from "@/assets/product-bag.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Vestido Elegante Premium",
      price: "R$ 2.890",
      originalPrice: "R$ 3.200",
      image: productDress,
      rating: 5,
      isNew: true,
    },
    {
      id: 2,
      name: "Terno Executivo Luxury",
      price: "R$ 4.500",
      image: productSuit,
      rating: 5,
      isBestseller: true,
    },
    {
      id: 3,
      name: "Bolsa Designer Collection",
      price: "R$ 1.850",
      image: productBag,
      rating: 5,
      isLimited: true,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 animate-fade-up">
            Peças em <span className="text-gradient">Destaque</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Selecionamos especialmente para você as peças mais desejadas da nossa coleção atual
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="card-luxury overflow-hidden group hover:shadow-gold transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      NOVO
                    </span>
                  )}
                  {product.isBestseller && (
                    <span className="bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      BESTSELLER
                    </span>
                  )}
                  {product.isLimited && (
                    <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      EDIÇÃO LIMITADA
                    </span>
                  )}
                </div>

                {/* Wishlist Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Heart className="h-5 w-5" />
                </Button>

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="btn-luxury">
                    Visualização Rápida
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-2">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <h3 className="font-playfair text-xl font-semibold mb-2">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <Button className="w-full mt-4 btn-outline-luxury">
                  Adicionar ao Carrinho
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-luxury">
            Ver Toda Coleção
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;