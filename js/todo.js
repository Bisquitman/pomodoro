import { state } from './state.js';

const titleElem = document.querySelector('.title');
const todoListElem = document.querySelector('.todo__list');
const pomodoroCountElem = document.querySelector('.count_num');

const li = document.createElement('li');
li.className = 'todo__item';

const todoAddBtn = document.createElement('button');
todoAddBtn.className = 'todo__add';
todoAddBtn.textContent = 'Добавить новую задачу';
li.append(todoAddBtn);

export const getTodo = () => {
  const todoList = JSON.parse(localStorage.getItem('pomodoro') || '[]');

  return todoList;
};

const addTodo = (title) => {
  const todo = {
    title,
    pomodoro: 0,
    id: Math.random().toString(16).substring(2, 8),
  };

  const todoList = getTodo();
  todoList.push(todo);

  localStorage.setItem('pomodoro', JSON.stringify(todoList));

  return todo;
};

const createTodoListItem = (todo) => {
  if (todo.id !== 'default') {
    const todoItem = document.createElement('li');
    todoItem.className = 'todo__item';

    const todoItemWrapper = document.createElement('div');
    todoItemWrapper.className = 'todo__item-wrapper';
    todoItem.append(todoItemWrapper);

    const todoBtn = document.createElement('button');
    todoBtn.className = 'todo__btn';
    todoBtn.textContent = todo.title;

    const editBtn = document.createElement('button');
    editBtn.className = 'todo__edit';
    editBtn.ariaLabel = 'Редактировать задачу';

    const delBtn = document.createElement('button');
    delBtn.className = 'todo__del';
    delBtn.ariaLabel = 'Удилить задачу';

    todoItemWrapper.append(todoBtn, editBtn, delBtn);

    todoListElem.prepend(todoItem);

    todoBtn.addEventListener('click', (e) => {});

    editBtn.addEventListener('click', (e) => {});

    delBtn.addEventListener('click', (e) => {});
  }
};

const renderTodoList = (list) => {
  todoListElem.textContent = '';
  list.forEach(createTodoListItem);
  todoListElem.append(li);
};

const showTodo = () => {
  titleElem.textContent = state.activeTodo.title;
  pomodoroCountElem.textContent = state.activeTodo.pomodoro;
};

export const initTodo = () => {
  const todoList = getTodo();

  if (!todoList.length) {
    state.activeTodo = [
      {
        id: 'default',
        pomodoro: 0,
        title: 'Помодоро',
      },
    ];
  } else {
    state.activeTodo = todoList[todoList.length - 1];
  }

  console.log('state.activeTodo: ', state.activeTodo);

  showTodo();

  renderTodoList(todoList);

  todoAddBtn.addEventListener('click', (e) => {
    const title = prompt('Введите название задачи');
    const todo = addTodo(title);
    createTodoListItem(todo);
  });
};
