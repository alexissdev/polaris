import ProductRepository from "@/libs/product/product.repository";

import Header from "@/components/Header";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";

import Container from "@/components/Container";
import CardList from "@/components/card/CardList";

export default function Home({ products }: { products: ProductRepository[] }) {
  return (
    <div className="bg-secondary">
      <Header metaData={{ title: "Test", description: "", url: "" }} />
      <Navigation />
      <Container>
        <CardList products={products} />
      </Container>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const products: ProductRepository[] = [
    {
      name: "Apple Watch Series 6",
      shortDescription: "The apple watch series 6 is good for your health",
      description: "The apple watch series 6 is good for your health",
      imageUrl: "https://flowbite.com/docs/images/products/apple-watch.png",
      price: 100,
    },
    {
      name: "Apple Watch Series 6",
      shortDescription: "The apple watch series 6 is good for your health",
      description: "The apple watch series 6 is good for your health",
      imageUrl: "https://flowbite.com/docs/images/products/apple-watch.png",
      price: 100,
    },
    {
      name: "Apple Watch Series 6",
      shortDescription: "The apple watch series 6 is good for your health",
      description: "The apple watch series 6 is good for your health",
      imageUrl: "https://flowbite.com/docs/images/products/apple-watch.png",
      price: 100,
    },
  ];

  return {
    props: {
      products,
    },
  };
}
