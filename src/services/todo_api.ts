import { Todo } from '../types/types';

async function apiSaveTodo(newTodo: Todo): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const localTodos = localStorage.getItem('todosTolkin');
      const listTodos: Todo[] = localTodos ? JSON.parse(localTodos) : [];
      listTodos.push(newTodo);
      localStorage.setItem('todosTolkin', JSON.stringify(listTodos));

      resolve();
    }, 500);
  });
}

export async function saveTodo(newTodo: Todo) {
  try {
    await apiSaveTodo(newTodo);
  } catch {
    console.error('Ошибка в записи Todo ');
    throw new Error('Ошибка в записи Todo');
  }
}

async function apiLoadTodo(): Promise<Todo[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const localTodos = localStorage.getItem('todosTolkin');
      const parseTodos: Todo[] = localTodos ? JSON.parse(localTodos) : [];

      resolve(parseTodos);
    }, 500);
  });
}

export async function loadTodo() {
  try {
    const result: Todo[] = await apiLoadTodo();
    return result;
  } catch {
    console.error('Ошибка чтения Todo');
    throw new Error('Ошибка чтения Todo');
  }
}
