import CardRepository from "@/libs/card/card.repository";

import Header from "@/components/Header";
import Container from "@/components/Container";
import CardList from "@/components/card/CardList";

export default function Home({ cards }: { cards: CardRepository[] }) {
  return (
    <div className="bg-secondary">
      <Header metaData={{ title: "Test", description: "", url: "" }}>
        <Container>
          <CardList cards={cards} />
        </Container>
      </Header>
    </div>
  );
}

export async function getStaticProps() {
  const cards: CardRepository[] = [
    {
      name: "Apple Watch Series 6",
      description: "The apple watch series 6 is good for your health",
      imageUrl: "https://flowbite.com/docs/images/products/apple-watch.png",
      price: 100,
    },
    {
      name: "Apple Watch Series 6",
      description: "The apple watch series 6 is good for your health",
      imageUrl: "https://flowbite.com/docs/images/products/apple-watch.png",
      price: 100,
    },
    {
      name: "Apple Watch Series 6",
      description: "The apple watch series 6 is good for your health",
      imageUrl: "https://flowbite.com/docs/images/products/apple-watch.png",
      price: 100,
    },
    {
      name: "Apple Watch Series 6",
      description: "The apple watch series 6 is good for your health",
      imageUrl: "https://flowbite.com/docs/images/products/apple-watch.png",
      price: 100,
    },
    {
      name: "Apple Watch Series 6",
      description: "The apple watch series 6 is good for your health",
      imageUrl: "https://flowbite.com/docs/images/products/apple-watch.png",
      price: 100,
    },
    {
      name: "Apple Watch Series 6",
      description: "The apple watch series 6 is good for your health",
      imageUrl: "https://flowbite.com/docs/images/products/apple-watch.png",
      price: 100,
    },
  ];

  return {
    props: {
      cards,
    },
  };
}
