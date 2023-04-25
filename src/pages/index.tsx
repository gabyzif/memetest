import ListButtons from '@/components/ListButtons/ListButtons';
import Container from '@/components/Container/Container';

export default function Home() {
  return (
    <main>
      <div>
        <Container width="90%">
          <div className="w-full py-3">
            <h1>Memetest</h1>
            <p>Choose a category!</p>
          </div>

          <ListButtons
            categories={[
              { name: 'test', score: '89' },
              { name: 'test2', score: '89' }
            ]}
          />
        </Container>
      </div>
    </main>
  );
}
