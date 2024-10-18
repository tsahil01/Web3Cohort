import "./App.css";
import {QueryClient, QueryClientProvider, useQuery, useQueryClient, } from '@tanstack/react-query';
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Todo />
    </QueryClientProvider>
  );
}

async function getterFunction() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const response = await data.json();
  console.log(response);
  return response;
}

function Todo() {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getterFunction,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    console.log(error);
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
