import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CreateTodoComponent from "components/create-todo";
import TodoListComponent from "components/todo-list";

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Todos App</title>
        <meta name="description" content="simple todo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container h-full py-8">
        <CreateTodoComponent></CreateTodoComponent>
        <TodoListComponent></TodoListComponent>
      </main>
    </div>
  );
};

export default Home;
