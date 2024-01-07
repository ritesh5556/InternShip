// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import fileReducer from './slices/fileSlice';
import { fetchFiles, incrementViewCount } from './fileThunks';

const store = configureStore({
  reducer: {
    files: fileReducer,
  },
});

export { fetchFiles, incrementViewCount };
export default store;
