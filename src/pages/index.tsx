import CardRepository from "@/libs/card/card.repository";

import Header from "@/components/Header";
import Container from "@/components/Container";
import CardList from "@/components/card/CardList";

export default function Home({ cards }: { cards: CardRepository[] }) {
  return (
    <>
      <Header metaData={{ title: "Test", description: "", url: "" }} />
      <Container>
        <div className="bg-gray-900">
          <CardList cards={cards} title="Examples" />
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const cards: CardRepository[] = [
    {
      name: "Test1",
      description: "Test",
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      name: "Test2",
      description: "Test",
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      name: "Test3",
      description: "Test",
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      name: "Test4",
      description: "Test",
      imageUrl: "https://picsum.photos/200/300",
    },
  ];

  return {
    props: {
      cards,
    },
  };
}
