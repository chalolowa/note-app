'use client'

import { completeTodo } from '@/utils/actions';
import {useTransition} from 'react'

const Todo = ({todo}) => {
    const [isPending, startTransition] = useTransition();

    return <div className={'border border-black/20 cursor-pointer'}
        onClick={() => startTransition(() => completeTodo(todo.id))}>
        {todo.content}
        </div>
}
export default Todo;