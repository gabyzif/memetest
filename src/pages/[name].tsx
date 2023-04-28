import Container from '@/components/Container/Container';
import PieceContainer from '@/components/Pieces/PieceContainer/PieceContainer';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import useStorage from '@/hooks/useStorage';
import { useEffect } from 'react';

const Page = ({ game }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const router = useRouter();
  const { getItem } = useStorage();

  const { data, error, isLoading } = useSWR(
    `${process.env.STRAPI_URL}api/games?populate=*&filters[category][name][$eq]=${router.query.name}`,
    fetcher,
    { initialData: game }
  );

  useEffect(() => {
    const pieceLS = getItem('cards', 'session');
    console.log(pieceLS, 'pieceLS');
  }, []);

  // send piece, moves, score, and guess as props from ST

  return (
    <Container width="auto">
      {data ? (
        <PieceContainer
          category={router.query.name.replace('_', ' ')}
          piece={data.data[0].attributes.images.data}
        />
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default Page;

export async function getStaticPaths() {
  let categories;
  try {
    categories = await fetch(`${process.env.STRAPI_URL}api/categories`);
    categories = await categories.json();
    categories = categories.data;
    return {
      paths: categories.map((c) => ({
        params: { name: c.attributes.name }
      })),
      fallback: false
    };
  } catch (e) {
    return e;
  }
}

export async function getStaticProps({ params }) {
  let game;

  try {
    game = await fetch(
      `${process.env.STRAPI_URL}api/games?populate=*&filters[category][name][$eq]=${params.name}`
    );
    game = await game.json();
    return {
      props: {
        game: game.data
      }
    };
  } catch (e) {
    return e;
  }
}
