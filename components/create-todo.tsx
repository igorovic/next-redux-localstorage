import { FormEventHandler, useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { useAppDispatch } from "app/hooks";
import { createTodo } from "app/feature/todo";

import "react-day-picker/lib/style.css";

interface State {
  name: string;
  dueDate: string;
}

const DEFAULT_DUEDATE = new Date();

const initialState: State = {
  dueDate: DEFAULT_DUEDATE.toISOString(),
  name: "",
};
const CreateTodoComponent: React.FC = () => {
  const [state, setState] = useState<State>(initialState);
  const dispatch = useAppDispatch();

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    dispatch(
      createTodo({
        ...state,
        done: false,
      })
    );
  };

  const nameChange = async (e: any) => {
    setState({
      ...state,
      name: e.target.value,
    });
  };

  const dayChange = async (day: Date) => {
    setState({
      ...state,
      dueDate: day.toISOString(),
    });
  };
  return (
    <div className="shadow-xl p-4 rounded">
      <form action="" onSubmit={submit} className="flex flex-col gap-2.5">
        <label htmlFor="todo-name">
          Todo
          <input
            id="todo-name"
            type="text"
            required={true}
            placeholder="name"
            className="w-full p-2 border-b"
            onChange={nameChange}
          ></input>
        </label>
        <div className="bg-grey-300">
          <DayPickerInput value={DEFAULT_DUEDATE} onDayChange={dayChange} />
        </div>
        <button
          type="submit"
          className="place-self-center px-4 py-2 rounded-lg bg-blue-500 text-white shadow-lg hove:shadow-none"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateTodoComponent;
