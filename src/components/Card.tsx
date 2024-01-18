import Button from "./Button";

const Card = ({todo}) => {
  return (
    <div className='card w-96 bg-base-100 shadow-xl image-full'>
      <figure>
        <img
          src={todo.image}
          alt='board cover'
        />
      </figure>
      <div className='card-body'>
        <h2 className='justify-center card-title'>{todo.title}</h2>
        <p className="flex justify-center">{todo.description}</p>
        <div className='card-actions justify-center'>
            <Button style='btn-primary' size="btn-sm" text='Open' />
            <Button style='btn-outline btn-warning' size="btn-sm" text='Archive' />
            <Button style='btn-error' size="btn-sm" text='Delete' />
        </div>
      </div>
    </div>
  );
};
export default Card;