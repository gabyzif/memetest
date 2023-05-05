import Button from '../Button/Button';
import Router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

interface ListButtonsProps {
  categories: [];
  continueGame: () => void;
  score: number;
}

const ListButtons: React.FC<ListButtonsProps> = ({ categories, score }) => {
  const continueGame = (c) => {
    Router.push({
      pathname: `/${c}`,
      query: { hasSessionData: true }
    });
  };

  const store = useSelector((state) => state.categories);

  const checkIfHasAGameStarted = (c) => {
    if (store[c] && !store[c].cards) {
      return true;
    }
    return false;
  };

  const getMaxScore = (c) => {
    if (store[c] && store[c].maxScore) {
      return store[c].maxScore;
    }
    return false;
  };
  return (
    <div className="bg-secondary-light rounded-3xl md:p-10 overflow-x-hidden">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left  bg-secondary-light">
            <th className="uppercase font-medium py-4 px-2 md:px-6">Category</th>
            <th className="uppercase font-medium py-4 md:px-6">Max Score</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {categories.map((c, i) => (
            <tr
              key={`${c}-${i}`}
              className={`${i !== categories.length - 1 ? 'border-b border-tertiary-dark' : ''} `}
            >
              <td className="uppercase py-4 px-6">{c.replace('_', ' ')}</td>
              <td className="py-4 px-6">{getMaxScore(c) || '-'}</td>
              <td className="py-4 px-6">
                <div className="flex gap-3 justify-end">
                  <div className="w-fit">
                    <Button href={c} variant="primary">
                      Start
                    </Button>
                  </div>
                  <div className="w-fit">
                    <Button
                      onClick={() => continueGame(c)}
                      variant="tertiary"
                      disabled={checkIfHasAGameStarted(c)}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListButtons;
