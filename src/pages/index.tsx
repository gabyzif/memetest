import ListButtons from '@/components/ListButtons/ListButtons';
import Container from '@/components/Container/Container';
import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <main>
      <div>
        <Container width="90%" variant="tertiary">
          <Container width="80%" height="auto">
            <div className="w-full py-10 ">
              <h1 className=" text-5xl mb-3 tracking-wide font-bold uppercase font-play">Memetest</h1>
              <p className=" font-thin">Choose a category!</p>
            </div>

            <ListButtons
              categories={[
                { name: 'test', score: '89' },
                { name: 'test2', score: '89' }
              ]}
            />
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
