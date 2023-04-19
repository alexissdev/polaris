import useCart from "@/hooks/useCart";
import ProductRepository from "@/libs/product/product.repository";
import CartProductRepository from "@/libs/product/cart.product.repository";

import Header from "@/components/Header";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";
import Container from "@/components/Container";
import CardList from "@/components/card/CardList";

export default function Home({ products }: { products: ProductRepository[] }) {
  const {
    cart,
    viewCart,
    toggleCart,
    addToCart,
  }: {
    cart: CartProductRepository[];
    viewCart: boolean;
    toggleCart: () => void;
    addToCart: (product: CartProductRepository) => void;
  } = useCart();

  return (
    <div className="bg-secondary">
      <Header metaData={{ title: "Test", description: "", url: "" }} />
      <Navigation cart={cart} viewCart={viewCart} toggleCart={toggleCart} />
      <Container>
        <CardList addToCart={addToCart} products={products} />
      </Container>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const products: ProductRepository[] = [];
  const response: any = await fetch("https://fakestoreapi.com/products").then((result) => result.json());
  let i: number = 0;

  for (const product of response) {
    if (i === 6) {
      break;
    }

    i++;
    products.push({
      name: product.title,
      shortDescription: product.description,
      description: product.description,
      imageUrl: product.image,
      price: product.price,
    });
  }

  return {
    props: {
      products,
    },
  };
}
