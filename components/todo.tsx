import { Todo } from "app/feature/todo";
import { useAppDispatch } from "app/hooks";
import {
  deleteTodo as deleteTodoAction,
  toggleDone as toggleDoneAction,
} from "app/feature/todo";
interface Props {
  todo: Todo;
}

const TodoComponent: React.FC<Props> = ({ todo }) => {
  const dispatch = useAppDispatch();

  const deleteTodo = () => {
    if (typeof todo.id !== "number") return;
    dispatch(deleteTodoAction(todo.id));
  };

  const toggleDone = () => {
    if (typeof todo.id !== "number") return;
    dispatch(toggleDoneAction(todo.id));
  };

  return (
    <div className="flex" style={{ justifyContent: "space-between" }}>
      <div>
        <p>name: {String(todo.name)}</p>
        <p>due: {new Date(todo.dueDate).toLocaleDateString()}</p>
        <input
          type="checkbox"
          defaultChecked={todo.done}
          onChange={toggleDone}
        />
        &nbsp; DONE
      </div>
      <div>
        <button className="hover:text-red-500 p-2 rounded" onClick={deleteTodo}>
          delete
        </button>
      </div>
    </div>
  );
};

export default TodoComponent;
