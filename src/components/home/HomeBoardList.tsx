import React from "react";
import HomeBoardListProps from "../../interface/HomeBoardListProps";
import Card from "../Card";

const HomeBoardList: React.FC<HomeBoardListProps> = ({ todos }) => {
  return (
    <div className='flex flex-wrap justify-start gap-4 my-12 mx-32'>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <Card todo={todo} />
          </div>
        );
      })}
    </div>
  );
};
export default HomeBoardList;
