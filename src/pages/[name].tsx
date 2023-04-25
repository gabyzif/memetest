import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div>
      <h1>Page: {name}</h1>
    </div>
  );
};

export default Page;
