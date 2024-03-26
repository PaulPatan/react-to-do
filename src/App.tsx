import React from "react";
//yarn run dev so that the project Runs
type Todo = {
  id: string;
  message: string;
};

const App: React.FC = () => {
  const [todos, setTodos] = React.useState<Array<Todo>>([]);
  const [message, setMessage] = React.useState<string>("");

  const handleOnAddButtonClick = () => {
    const todo: Todo = {
      id: crypto.randomUUID(),
      message,
    };

    setTodos((prev) => [...prev, todo]);
    setMessage("");
  };

  const handleOnXButtonClick = (id: string) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };
  

  return (
    <>
      <input type="text" onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleOnAddButtonClick}>Add</button>
      {todos && todos.length > 0 ? (
        <ul>
          {todos.map((todo) => {
            return (
              <React.Fragment key={todo.id}>
                <li>{todo.message}</li>
                <button onClick={() => handleOnXButtonClick(todo.id)}>X</button>
              </React.Fragment>
            );
          })}
        </ul>
      ) : (
        <p>No todos for you</p>
      )}
    </>
  );
};

export default App;
