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
    id: [`${todo.id}`],
  }));
}

export default function Id({ params }: { params: { id: Todo[] } }) {
  console.log(params);
  return <div>page</div>;
}
