import Button from '../Button/Button';
import Container from '../Container/Container';

interface IModal {
  score: number;
  onClose: () => void;
}
const Modal: React.FC<IModal> = ({ score, onClose }) => {
  return (
    <Container variant="primary" height="200px" width="300px">
      <div className="grid ">
        <button className="justify-self-end" onClick={onClose}>
          <h1 className="text-gray-700">X</h1>
        </button>
        <div className="w-full m-auto  h-32 text-center">
          <h2 className="uppercase text-3xl mb-2 font-bold text-gray-700">Score: {score}</h2>
          <div className="m-auto w-full  flex  justify-center text-center">
            <Button variant="secondary" href="/">
              Home
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Modal;
