import Button from '../Button/Button';
import Container from '../Container/Container';

interface IModal {
  score: number;
  onClose: () => void;
}
const Modal: React.FC<IModal> = ({ score, onClose }) => {
  return (
    <div className=" w-screen h-screen  absolute bg-gray-800 m-0 top-0 left-0 flex bg-opacity-90	">
      <div className=" md:w-4/12 bg-primary-light w-9/12 justify-center h-fit shadow-lg shadow-lime-300 m-auto p-10 rounded-xl ">
        <div className="grid ">
          <button className="justify-self-end" onClick={onClose}>
            <h1 className="text-gray-700">X</h1>
          </button>
          <div className="w-full m-auto  text-center">
            <h2 className="uppercase text-3xl mb-2 font-bold text-gray-700">Score: {score}</h2>
            <div className="m-auto w-full  flex  justify-center text-center">
              <Button variant="secondary" href="/">
                Home
              </Button>
            </div>
          </div>
        </div>
      </div>{' '}
    </div>
  );
};

export default Modal;
