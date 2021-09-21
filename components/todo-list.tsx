import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTodos } from "app/feature/todo";
import TodoComponent from "./todo";

const TodoListComponent: React.FC = () => {
  const todos = useSelector(selectTodos);
  const renderTodos = todos.map((T) => (
    <div key={T.id}>
      <TodoComponent todo={T}></TodoComponent>
    </div>
  ));
  return <>{renderTodos}</>;
};

export default TodoListComponent;
