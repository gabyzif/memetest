import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListButtons from '@/components/ListButtons/ListButtons';
import Container from '@/components/Container/Container';
import useStorage from '@/hooks/useStorage';
import Router from 'next/router';
import { selectCategory, setCategories } from '@/store/slice';

export default function Home({ categories }) {
  console.log(categories);
  const { getItem } = useStorage();
  const dispatch = useDispatch();
  useEffect(() => {
    if (categories) {
      const categoriesWithMaxScore = categories.reduce((acc, curr) => {
        acc[curr] = { maxScore: null };
        return acc;
      }, {});

      dispatch(setCategories(categoriesWithMaxScore));
    }
  }, [categories, dispatch]);
  const continueGame = () => {
    const category = getItem('game', 'session');
    Router.push({
      pathname: `/${category}`,
      query: { hasSessionData: true }
    });
  };

  return (
    <main>
      <div>
        <Container variant="tertiary">
          <Container width="80%" height="auto">
            <div className="w-full py-10 ">
              <h1 className=" text-5xl mb-3 tracking-wide font-bold uppercase font-play">Memetest</h1>
              <p className=" font-thin">
                Choose a category to start a new game or continue your previous session
              </p>
            </div>

            {categories ? <ListButtons categories={categories} /> : <p>Loading...</p>}
            <div className="flex justify-center my-3 gap-3">
              <button onClick={() => continueGame()}> Continue </button>
            </div>
          </Container>
        </Container>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  let categories;
  try {
    const response = await fetch(`${process.env.STRAPI_URL}api/categories`);
    const data = await response.json();
    categories = data?.data || null;
    console.log(categories);
    categories = categories?.map((category) => category.attributes.name);
  } catch (e) {
    categories = null;
  }

  return {
    props: {
      categories
    }
  };
}
