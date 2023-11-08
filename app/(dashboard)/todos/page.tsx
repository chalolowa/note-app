import TodoList from '@/components/TodoList';
import db from '@/utils/db'

const getData =async () => {
    await new Promise ((resolve, reject) => setTimeout(() => reject(), 3000));
    const todos = await db.todo.findMany({});
    return todos;
}

const TodosPlace = async () => {
    const todos = await getData();
    return <div>
        <TodoList todos={todos} />
    </div>
}

export default TodosPlace;