import Container from '@/components/Container/Container';
import PieceContainer from '@/components/Pieces/PieceContainer/PieceContainer';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCards, setScore, setMoves } from '@/store/slice';

const Page = ({ game }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const router = useRouter();
  const dispatch = useDispatch();

  const { data, error, isLoading } = useSWR(
    `${process.env.STRAPI_URL}api/games?populate=*&filters[category][name][$eq]=${router.query.name}`,
    fetcher,
    { initialData: game }
  );

  useEffect(() => {
    if (data) {
      const category = router.query.name.replace('_', ' ');
      dispatch(setCards(category, data.data[0].attributes.images.data));
      dispatch(setScore(category, 0));
      dispatch(setMoves(category, router.query.sessionMoves || 0));
    }
  }, [data, router.query.sessionMoves]);

  return (
    <Container width="auto">
      {data ? (
        <PieceContainer
          category={router.query.name.replace('_', ' ')}
          piece={data.data[0].attributes.images.data}
          hasSessionData={router.query.hasSessionData}
          sessionMoves={router.query.sessionMoves || ''}
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
