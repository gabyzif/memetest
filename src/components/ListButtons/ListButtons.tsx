import Button from '../Button/Button';

interface ListButtonsProps {
  categories: { name: string; score: string }[];
}

const ListButtons: React.FC<ListButtonsProps> = ({ categories }) => {
  return (
    <div className="list-buttons flex flex-wrap flex-col gap-3 w-full text-center">
      {categories.map((c, i) => (
        <Button key={`${c.name}-${i}`} href="#" variant="primary">
          <div className="flex justify-between">
            <p>{c.name}</p>
            <p>{c.score}</p>
          </div>
        </Button>
      ))}
    </div>
  );
};

export default ListButtons;
