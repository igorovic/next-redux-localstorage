import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTodos } from "app/feature/todo";
import TodoComponent from "./todo";

const TodoListComponent: React.FC = () => {
  const todos = useSelector(selectTodos);
  const renderTodos = todos.map((T) => (
    <div key={T.id} className="mt-3 border-b shadow-md rounded-md p-4">
      <TodoComponent todo={T}></TodoComponent>
    </div>
  ));
  return (
    <div className="mt-10 rounded-lg p-4 grid grid-flow-row gap-4">
      {renderTodos}
    </div>
  );
};

export default TodoListComponent;
