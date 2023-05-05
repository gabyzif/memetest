import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListButtons from '@/components/ListButtons/ListButtons';
import Container from '@/components/Container/Container';
import useStorage from '@/hooks/useStorage';
import { selectCategory, setCategories, setCategoryList } from '@/store/slice';

export default function Home({ categories }) {
  const storeCategories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const { getItem, setItem } = useStorage();

  console.log(storeCategories);
  useEffect(() => {
    if (!Object.keys(storeCategories).length) {
      const categoriesWithMaxScore = categories.reduce((acc, curr) => {
        acc[curr] = { maxScore: null };
        return acc;
      }, {});
      dispatch(setCategoryList(categories));
      dispatch(setCategories(categoriesWithMaxScore));
    }
  }, [categories, dispatch, storeCategories]);

  useEffect(() => {
    const storedData = getItem('persist:root', 'local');
    const parsedData = storedData ? JSON.parse(storedData) : null;
    const categoriesLS = parsedData ? JSON.parse(parsedData.categories) : null;
    if (categoriesLS && Object.keys(categoriesLS).length) {
      dispatch(setCategories(categoriesLS));
    }
    return;
  }, []);
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
