import { createSlice } from '@reduxjs/toolkit';

type TestSlice = {
  foo: string;
};

const initialState: TestSlice = {
  foo: 'bar',
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {},
});

// export const {} = debugModeSlice.actions;
