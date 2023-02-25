import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TaskSchema } from '../types/task';

const initialState: TaskSchema = {
    Tasks: [],
};

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        createTask: (state, action: PayloadAction<Task>) => {
            state.Tasks.push(action.payload);
        },
    },
});

export const { actions: taskActions } = taskSlice;
export const { reducer: taskReducer } = taskSlice;
