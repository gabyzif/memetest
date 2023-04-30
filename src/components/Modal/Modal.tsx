import Button from '../Button/Button';
import Container from '../Container/Container';

interface IModal {
  score: number;
  onClose: () => void;
}
const Modal: React.FC<IModal> = ({ score, onClose }) => {
  return (
    <div className=" w-screen h-screen absolute bg-tertiary-dark m-0 top-0 left-0 flex bg-opacity-90	">
      <Container variant="primary" className=" w-6/12 h-96">
        <div className="grid  h-full ">
          <button className="justify-self-end" onClick={onClose}>
            <h1 className="text-gray-700">X</h1>
          </button>
          <div className="w-full m-auto  h-60 text-center">
            <h2 className="uppercase text-3xl mb-2 font-bold text-gray-700">Score: {score}</h2>
            <div className="m-auto w-full  flex  justify-center text-center">
              <Button variant="secondary" href="/">
                Home
              </Button>
            </div>
          </div>
        </div>
      </Container>{' '}
    </div>
  );
};

export default Modal;
