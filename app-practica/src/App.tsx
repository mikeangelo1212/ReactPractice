import "tailwindcss";
import { dummyData } from "./data/todos";
import TodoItem from "./components/TodoItem";

function App() {

  return (
    <main className="py-10  bg-lime-600 text-center space-y-1">
      <h1 className="font-bold text-lg">
        Todo
      </h1>
      <div>
        <div className="space-y-2 max-w-lg mx-auto center ">
          {dummyData.map(todo=>(
            <TodoItem todo={todo}/>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
