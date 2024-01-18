import "./App.css";
import Modal from "./components/Modal";

const App = () => {

  return (
    <>
      <div className='flex items-center justify-center'>
        <article className='flex flex-col items-center  justify-center prose'>
          <h1>Actions</h1>
          <Modal/>
        </article>
      </div>
    </>
  );
}

export default App;
