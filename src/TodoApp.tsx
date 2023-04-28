import { useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from './store/api';

export const TodoApp = () => {
  // const { data, isLoading } = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1);
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  console.log({ todo });
  return (
    <div
      style={{
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>
      <pre>{JSON.stringify(todo)}</pre>
      {/* <ul>
        {(data || []).map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? 'DONE - ' : 'Pending - '}</strong>
            {todo.title}
          </li>
        ))}
      </ul> */}
      <button onClick={prevTodo}>Prev Todo</button>
      <button onClick={nextTodo}>Next Todo</button>
    </div>
  );
};
