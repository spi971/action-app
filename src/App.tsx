import "./App.css";
import Card from "./components/Card";
import Modal from "./components/Modal";

const App = () => {
  const todos = [
    {
      id: 1,
      title: "delectus aut autem",
      image:
        "https://images.unsplash.com/photo-1704774801286-c06af794df06?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eaque tempora quis, quidem voluptas maxime explicabo tempore nostrum ipsum non nisi odio animi eum voluptates harum debitis, sequi minima deserunt.,",
    },
    {
      id: 2,
      title: "delectus aut autem",
      image:
        "https://images.unsplash.com/photo-1704929879909-2a972afed576?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eaque tempora quis, quidem voluptas maxime explicabo tempore nostrum ipsum non nisi odio animi eum voluptates harum debitis, sequi minima deserunt.,",
    },
    {
      id: 3,
      title: "delectus aut autem",
      image:
        "https://images.unsplash.com/photo-1704884382421-f9f64d04f2d3?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eaque tempora quis, quidem voluptas maxime explicabo tempore nostrum ipsum non nisi odio animi eum voluptates harum debitis, sequi minima deserunt.,",
    },
  ];
  return (
    <>
      <div className='flex items-center justify-center flex-col gap-2'>
        <article className=' flex flex-col items-center justify-center prose'>
          <h1 className='text-primary text-6xl my-6'>Actions!!</h1>
          <Modal />
        </article>
      </div>
      <div className='flex flex-wrap justify-start gap-4 my-12 mx-32'>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <Card todo={todo} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
