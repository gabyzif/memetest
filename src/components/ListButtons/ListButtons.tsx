import Button from '../Button/Button';

interface ListButtonsProps {
  categories: { attributes: { name: string; score: string } }[];
}

const ListButtons: React.FC<ListButtonsProps> = ({ categories }) => {
  return (
    <div className="list-buttons flex flex-wrap flex-col gap-3 w-full text-center">
      {categories.map((c, i) => (
        <Button key={`${c.attributes.name}-${i}`} href={c.attributes.name} variant="primary">
          <div className="flex justify-between uppercase w-full">
            <p>{c.attributes.name.replace('_', ' ')}</p>
            <p>Score: {c.attributes.score}</p>
            <p>Difficulty:</p>
          </div>
        </Button>
      ))}
    </div>
  );
};

export default ListButtons;
