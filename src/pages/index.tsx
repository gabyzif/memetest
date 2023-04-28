import ListButtons from '@/components/ListButtons/ListButtons';
import Container from '@/components/Container/Container';
import Button from '@/components/Button/Button';

export default function Home({ categories }) {
  return (
    <main>
      <div>
        <Container variant="tertiary">
          <Container width="80%" height="auto">
            <div className="w-full py-10 ">
              <h1 className=" text-5xl mb-3 tracking-wide font-bold uppercase font-play">Memetest</h1>
              <p className=" font-thin">Choose a category!</p>
            </div>

            {categories ? <ListButtons categories={categories} /> : <p>Loading...</p>}
            <div className="flex justify-center my-3 gap-3">
              <Button text="START" href="#" variant="secondary" />
              <Button text="CONTINUE" href="#" />
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
    categories = await fetch(`${process.env.STRAPI_URL}api/categories`);
    categories = await categories.json();
  } catch (e) {
    return e;
  }
  return {
    props: {
      categories: categories.data
    } // will be passed to the page component as props
  };
}
