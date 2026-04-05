import type { Todo } from "../types/todo";

interface TodoItemProps{
    todo:Todo;
}
export default function TodoItem({todo}:TodoItemProps){
    return(
        <div className="scale-125">
            <label className="flex items-center 
                    gap-2 border rounded-md 
                    border-pink-500 bg-blue-400
                    hover:bg-teal-300">
                <input type="checkbox" />
                <span className={todo.completed?"line-through text-blue-200":""}>
                    {todo.title}
                </span>
            </label>
        </div>
    )
}