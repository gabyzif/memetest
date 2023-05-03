import Button from '../Button/Button';

interface ListButtonsProps {
  categories: [];
}

const ListButtons: React.FC<ListButtonsProps> = ({ categories }) => {
  return (
    <div className="list-buttons flex flex-wrap flex-col gap-3 w-full text-center">
      {categories.map((c, i) => (
        <Button key={`${c}-${i}`} href={c} variant="primary" className="w-full">
          <div className="flex justify-between uppercase w-full">
            <p>{c.replace('_', ' ')}</p>
          </div>
        </Button>
      ))}
    </div>
  );
};

export default ListButtons;
