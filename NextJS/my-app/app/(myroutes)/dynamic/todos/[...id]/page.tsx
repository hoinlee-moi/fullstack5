import TodosIdDetecter from '@/app/ui/TodosIdDetecter';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export async function generateStaticParams() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/todos?userId=1&userId=2&userId=3'
  );
  const todos = await res.json();
  return todos.map((todo: Todo) => ({
    id: [`${todo.userId}`],
  }));
}

export default async function Id({
  params: { id },
}: {
  params: { id: string };
}) {
  const getTodo = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos?userId=${id}`
      );

      return res.json();
    } catch (error) {
      console.error(error);
    }
  };
  const todos: Todo[] = await getTodo();
  console.log(todos);
  // console.log('render!!!>>>>>', id);
  return (
    <div>
      <TodosIdDetecter todos={todos} />
      <ul>
        {todos.map((todo: Todo) => (
          <li key={todo.id} className='border border-solid border-blue-600'>
            <strong>Id : </strong>
            {todo.id} <br />
            <strong>userId : </strong>
            {todo.userId} <br />
            <strong>title : </strong>
            {todo.title}
            <br />
            <strong>completed : </strong>
            {todo.completed}
          </li>
        ))}
      </ul>
    </div>
  );
}
