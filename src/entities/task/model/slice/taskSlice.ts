import { createSlice } from '@reduxjs/toolkit';
import { TaskSchema } from '../types/task';

const initialState: TaskSchema = {
    test: 0,
};

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {

    },
});

export const { actions: taskActions } = taskSlice;
export const { reducer: taskReducer } = taskSlice;
