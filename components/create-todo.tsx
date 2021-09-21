import { FormEventHandler, useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { useAppDispatch } from "app/hooks";
import { createTodo } from "app/feature/todo";

import "react-day-picker/lib/style.css";

interface State {
  name: string;
  dueDate: string;
}

const DEFAULT_DUEDATE = new Date().toISOString();

const initialState: State = {
  dueDate: DEFAULT_DUEDATE,
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
    <form action="" onSubmit={submit} className="grid grid-auto-rows gap-2.5">
      <label htmlFor="todo-name">
        Todo
        <input
          id="todo-name"
          type="text"
          required={true}
          placeholder="name"
          className="w-full p-2"
          onChange={nameChange}
        ></input>
      </label>
      <DayPickerInput
        value={DEFAULT_DUEDATE}
        onDayChange={dayChange}
      ></DayPickerInput>
      <button type="submit">add</button>
    </form>
  );
};

export default CreateTodoComponent;
