// pages/index.js
import Head from 'next/head';
import TaskList from './TaskList';

const Home = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>To-Do List App</title>
      </Head>
      <h1 className="text-3xl text-center my-5">To-Do List</h1>
      <TaskList />
    </div>
  );
};

export default Home;
