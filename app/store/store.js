import { createStore } from 'redux';

import todo from '../reducers/todo.reducer';

export const store = createStore(todo);