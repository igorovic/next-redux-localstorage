import { Todo } from "app/feature/todo";

interface Props {
  todo: Todo;
}

const TodoComponent: React.FC<Props> = ({ todo }) => {
  return (
    <>
      <p>name: {String(todo.name)}</p>
      <p>{todo.dueDate}</p>
      <p>done: {String(todo.done)}</p>
    </>
  );
};

export default TodoComponent;
